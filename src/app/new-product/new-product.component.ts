import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public mode: number=1;
  public cuurentProduct:Product;
  public imagePath;
  imgURL: any;
  userFile ;
  public message: string;


  constructor(public catalogueService: CatalogueService, private router :Router) {}


  ngOnInit(): void {
  }


  onSaveProduct(data: any) {
    console.log(data);

    this.catalogueService.saveData(this.catalogueService.host +"/produits",data)
      .subscribe(res => {
        //this.router.navigateByUrl("/product")

        this.cuurentProduct=res;
        this.mode=2

        console.log(res);
      }, err => {
        console.log(err);
      })


  }


  OnAdd() {
    this.mode=1;
  }








}
