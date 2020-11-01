import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";


const routes: Routes = [
  { path:"product",
    component:ProduitsComponent

  },
  {
    path:"new-product",
    component:NewProductComponent
  },
  //route par defaut
  {
    path:"",
    redirectTo:"/product",
    pathMatch:'full'
  },
  {
    path:"edit-product/:id",
    component:EditProductComponent
  },
  {
    path:"detail-product/:id",
    component:DetailProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
