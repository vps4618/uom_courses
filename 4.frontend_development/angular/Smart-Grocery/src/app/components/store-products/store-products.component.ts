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

  constructor() { 
  }

  ngOnInit(): void {
  }
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
  public products = [{
    "productId":"001",
    "productName":"White Basmathi Rice",
    "createdDate":"2020.01.29",
    "unitPrice":"400",
    "quantity":100,
    "productDescription":"White Basmathi Rice imported from pakistan. High quality rice with extra fragnance. Organically grown."
  },
  {
    "productId":"002",
    "productName":"Flour",
    "createdDate":"2020.01.29",
    "unitPrice":"190",
    "quantity":50,
    "productDescription":"Super Fine Whole grain general Purpose flour"
  },
  {
    "productId":"003",
    "productName":"Sugar",
    "createdDate":"2020.01.29",
    "unitPrice":"200",
    "quantity":1200,
    "productDescription":"White sugar manufactured by Palwatte Factory"
  },
  {
    "productId":"004",
    "productName":"Dhal",
    "createdDate":"2020.01.29",
    "unitPrice":"200",
    "quantity":10,
    "productDescription":"Imported mysoor dhal from India"
 }]

 public isUnchanged = true;
 
 public onSave(){
   alert("saved");
 }

 //selecting row
public selectProduct(selectedRow:number){
  this.isRowSelected = true;
  this.rowIndex = selectedRow;
  
}
}
