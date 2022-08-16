import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../models/add-product-response.model';
import { productResponse } from '../models/product-response.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://host1.open.uom.lk/';
  constructor(private http:HttpClient) { }
  HttpOptions ={
    headers:new HttpHeaders({'Content-Type':'application/json'}),
};
  addProduct(product:Product):Observable<AddProductResponse>{
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
    product,
    this.HttpOptions
    );
  }

  getProducts():Observable<productResponse>{
    return this.http.get<productResponse>(
      this.baseUrl + 'api/products'
    )
  }
}
