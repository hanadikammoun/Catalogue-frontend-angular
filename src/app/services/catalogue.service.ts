import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
 public host:string="http://localhost:8080"

  public dataForm:  FormGroup;

  constructor(public httpClient:HttpClient) {
  }



  public getProduit(page:number,size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }
  public geproductByKey(des:string,page:number,size:number){
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?des="+des+"&page="+page+"&size="+size);
  }
  public delete(url){
    return this.httpClient.delete(url);
  }
  public saveData (url,data):Observable<Product>{
    return this.httpClient.post<Product>(url,data);

  }
  public getData (url):Observable<Product>{
    return this.httpClient.get<Product>(url);

  }
  public updateData (url,data):Observable<Product>{
    return this.httpClient.put<Product>(url,data);

  }


  createData(data: any): Observable<any> {
    return this.httpClient.post(`${this.host+"/produitsCatalogue"}`, data);
  }

  updatedataWithImage(id: number, value: any) {
    return this.httpClient.put(`${this.host+"/updateCatalogue"}/${id}`, value);
  }
}
