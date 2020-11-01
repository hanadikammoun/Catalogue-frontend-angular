import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentData: Product;
  private url: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService) {
  }

  ngOnInit(): void {
    // activateRoot to get id product (current data)
    this.url = atob(this.activatedRoute.snapshot.params.id)
    this.catalogueService.getData(this.url)
      .subscribe(data => {
        this.currentData = data;
      }, err => {
        console.log(err);
      })
  }
//update producte without image (en utilisant l'url active)
  onUpdateProduct(value: any) {
    this.catalogueService.updateData(this.url, value)
      .subscribe(data => {
        alert("Product mis a jours avec sucees")
        this.router.navigateByUrl("/product")
      }, error => {
        console.log(error);
      })

  }
//update product with image
  updateData(id: number, data: any) {
    {
      this.catalogueService.updatedataWithImage(id, data)
        .subscribe(data => {
          alert("Product mis a jours avec sucees")
          this.router.navigate(['/product']);
        }, error => {
          console.log(error);
        });
    }
  }
}
