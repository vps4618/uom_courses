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

}
