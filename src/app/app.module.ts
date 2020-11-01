import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NewProductComponent,
    EditProductComponent,
    DetailProductComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
