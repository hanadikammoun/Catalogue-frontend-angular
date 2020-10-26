import { Component } from '@angular/core';
import {ProduitsComponent} from "./produits/produits.component";
import {CatalogueService} from "./services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catalogueApp';
  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;

  public pages:Array<number>;
  private currentKeyword: string;
  constructor(private catalogueService:CatalogueService,private router:Router) { }

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

  onPageProduct(i: number) {
    this.currentPage=i;
    this.chercher();

  }
}
