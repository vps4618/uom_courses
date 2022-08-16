import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-store-products',

  //methods of specifying html template
  
  //first method is specifying html file url
  //templateUrl: './store-products.component.html',

  //second method  is  specifying inline template like below
  //template: '<div>This is inline template</div>',

  //we can write multile line template using back tick (`) like below
  //template: `
  // <h1>hi</h1>
  // <p>vishwa praveen</p>
  // `,

  //for single line template we can use single quotes and double quotes

  templateUrl:"./store-products.component.html",

  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {

  constructor(private productService :ProductService) { 
  }

  ngOnInit(): void {
    this.getProduct();
  }

  public showAddProduct:boolean | undefined;
  isLoading:boolean=false;
  //interpolation by using simple properties
  public firstProductItemName = "White Basmathi Rice";
  public quantityOfRice = 75;

  //attributte directives
  public isLowInventory = false;
  public dhalStorage = 10;
  
  public isRowSelected:boolean | undefined;
  public rowIndex!: number | undefined; //hence public rowIndex:number; not working we have to use | undefined. 
//hence public rowIndex:number; not working we have to use | undefined. 

  public getDhalStorage(){
     if(this.dhalStorage<50){
       this.isLowInventory = true;
     }

     return this.dhalStorage;
  }

  //structural directives
  public products :Product[]= [];

 public isUnchanged = true;
 
 public onSave(){
   alert("saved");
 }

 //selecting row
public selectProduct(selectedRow:number){
  this.isRowSelected = true;
  this.rowIndex = selectedRow;
  
}

public showAddProducts(){
  this.showAddProduct = true;
}

public hideAddProducts(){
  this.showAddProduct= false;
}

getProduct(){
  this.isLoading=true;
  this.productService.getProducts().subscribe((res)=>{
    this.products = res.data;
    this.isLoading =false;
  })
}

refresh(){
  this.getProduct();
}
}

