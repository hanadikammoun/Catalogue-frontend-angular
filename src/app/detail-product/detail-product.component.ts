import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  cuurentProduct: any;
  private url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute,public catalogueService:CatalogueService) { }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.id)
    this.catalogueService.getData(this.url)
      .subscribe(data=>{
        this.cuurentProduct=data;
      },err=> {
        console.log(err);
      })
  }


}
