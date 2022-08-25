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
    getProductByName(Name:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/name/'+Name);
    }
    getProductByBarcode(Barcode:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/barcode/'+Barcode);
    }
    getProductBySinhalaName(SinhalaName:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/sinhalaname/'+SinhalaName);
    }
    getProductByCostPrice(Cost:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/costprice/'+Cost);
    }
    getProductByWholesale(Wholesale:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/wholesaleprice/'+Wholesale);
    }
    getProductByBillPrice(Bill:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/billprice/'+Bill);
    }
    getProductBySalePrice(Sale:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/saleprice/'+Sale);
    }
    getProductById(Id:any):Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/id/'+Id);
    }
    getAllProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl+'items/');
    }
  }

