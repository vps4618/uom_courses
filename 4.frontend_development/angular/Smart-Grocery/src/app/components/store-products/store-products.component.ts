import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ViewProductDetailsComponent } from '../view-product-details/view-product-details.component';
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

  
  message!:string;

  //child to parent data sharing
  @ViewChild(ViewProductDetailsComponent) viewComponent !:ViewProductDetailsComponent

  ngOnInit(): void {
    this.getProduct();
    //assign value of message variable in viewproductdetails component to this parent message variable

    //we can't access value of childMessage in ngOnInit so we have to put this statement inside ngAfterViewInit life cycle hook
    //this.message = this.viewComponent.childMessage;
  }

  ngAfterViewInit(){
    this.message = this.viewComponent.childMessage;
  }
  showEditProduct!: boolean;
  //selectedProductId !:number;
  selectedProduct!:Product;

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
public isEyeClicked!:boolean;
  public getDhalStorage(){
     if(this.dhalStorage<50){
       this.isLowInventory = true;
     }

     return this.dhalStorage;
  }

  //structural directives
  public products :Product[]= [];//creating a instance of model product for getting data into it

 public isUnchanged = true;
 
 public onSave(){
   alert("saved");
 }

 //selecting row
  public selectProduct(selectedRow:number,product:Product){
    this.isRowSelected = true;
    this.rowIndex = selectedRow;
    this.selectedProduct =product;
  }

  public showAddProducts(){
    if(this.showEditProduct){
      this.showEditProduct = false;
    }
      this.showAddProduct = true;
    
  }

  // public hideAddProducts(){
  //   this.showAddProduct= false;
  // }

  refresh(){
    this.getProduct();
  }

  //getting data from api
  getProduct(){
    this.isLoading=true;
    this.productService.getProducts().subscribe((res)=>{
      this.products = res.data;
      this.isLoading =false;
    })
  }

  //update product list through emitted data
  updateProductList(){
    this.getProduct();
  }
  //open edit product view
  OpenEditProductView(){
    if(this.showAddProduct){
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }

  //close edit view
  closeEditView(){
    this.showEditProduct = false;
  }

  //close add view
  closeAddView(){
    this.showAddProduct = false;
  }

  eyeClicked(){
    this.isEyeClicked=true;
  }
}

