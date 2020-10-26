import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 public produits:any;
 public size:number=6;
 public currentPage:number=0;
 public totalPages:number;

 public pages:Array<number>;
  private currentKeyword: string;
  constructor(private catalogueService:CatalogueService,private router:Router) { }

  ngOnInit(): void {
    this.catalogueService.getProduit(this.currentPage,this.size)

      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;
      },err=>{
        console.log(err);
      }
    )
  }

  OnGetProduct() {
     this.catalogueService.getProduit(this.currentPage,this.size)
       .subscribe(data=>{
         this.totalPages=data["page"].totalPages;
         this.pages=new Array<number>(this.totalPages);
         this.produits=data;
       }, err=>{
         console.log(err);
       })



  }

  onPageProduct(i: number) {
    this.currentPage=i;
    this.OnGetProduct();

  }
  onSerach(f: any) {
    console.log(f)
    this.currentPage=0;
    this.currentKeyword=f.Keyword;
    this.chercher();
  }

  chercher() {
    this.catalogueService.geproductByKey(this.currentKeyword,this.currentPage,this.size)
      .subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits=data;
      }, err=>{
        console.log(err);
      })

  }

  onDeleteProduct(p) {
    let conf=confirm("Etes vous sure?")
    if (conf) {
      this.catalogueService.delete(p._links.self.href)
        .subscribe(data=>{
          this.OnGetProduct();
        },err=>{
          console.log(err);
          }
        )
    }


  }

  onEditProduct(p) {
    let url=p._links.self.href

    this.router.navigateByUrl("/edit-product/"+btoa(url))
  }


}
