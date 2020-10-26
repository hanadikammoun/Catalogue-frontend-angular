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



  constructor(private hhtpClient:HttpClient) {
  }

  public getProduit(page:number,size:number){
    return this.hhtpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }
  public geproductByKey(des:string,page:number,size:number){
    return this.hhtpClient.get(this.host+"/produits/search/byDesignationPage?des="+des+"&page="+page+"&size="+size);
  }
  public delete(url){
    return this.hhtpClient.delete(url);
  }
  public saveData (url,data):Observable<Product>{
    return this.hhtpClient.post<Product>(url,data);

  }
  public getData (url):Observable<Product>{
    return this.hhtpClient.get<Product>(url);

  }
  public updateData (url,data):Observable<Product>{
    return this.hhtpClient.put<Product>(url,data);

  }


}
