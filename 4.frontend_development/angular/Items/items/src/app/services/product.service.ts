import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { productResponse } from '../models/product-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://vpsposapi.herokuapp.com/';
  constructor(private http:HttpClient) { }
  HttpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'}),
};
  getProductByName(Name:any):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+'items/name/'+Name);
  }
  }

