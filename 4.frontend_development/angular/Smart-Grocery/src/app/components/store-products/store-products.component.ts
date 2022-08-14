import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  //interpolation by using simple properties
  public firstProductItemName = "White Basmathi Rice";
  public quantityOfRice = 75;

  //attributte directives
  public isLowInventory = false;
  public dhalStorage = 10;

  public getDhalStorage(){
     if(this.dhalStorage<50){
       this.isLowInventory = true;
     }

     return this.dhalStorage;
  }

  //structural directives
  public products = [{
    "productId":"001",
    "productName":"White Basmathi Rice",
    "createdDate":"Jan 29, 2020",
    "unitPrice":"Rs. 400",
    "quantity":100,
    "productDescription":"White Basmathi Rice imported from pakistan"
  },
  {
    "productId":"002",
    "productName":"Flour",
    "createdDate":"Jan 29, 2020",
    "unitPrice":"Rs. 190",
    "quantity":50,
    "productDescription":"Super Fine Whole grain general Purpose flour"
  },
  {
    "productId":"003",
    "productName":"Sugar",
    "createdDate":"Jan 29, 2020",
    "unitPrice":"Rs. 200",
    "quantity":1200,
    "productDescription":"White sugar manufactured by Palwatte Factory"
  },
  {
    "productId":"004",
    "productName":"Dhal",
    "createdDate":"Jan 29, 2020",
    "unitPrice":"Rs. 200",
    "quantity":10,
    "productDescription":"Imported mysoor dhal from India"
 }]

 public isUnchanged = true;
 
 public onSave(){
   alert("saved");
 }

}
