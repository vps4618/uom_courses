import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  constructor(private fb:FormBuilder,private productService:ProductService) { }

  productForm =this.fb.group({
    productName:['',Validators.required],
    description : ['',Validators.required],
    category : ['',Validators.required],
    brand : ['',Validators.required],
    expiredDate:['',Validators.required],
    manufacturedDate : ['',Validators.required],
    batchNumber : ['',Validators.required],
    unitPrice : [0,[Validators.required,Validators.min(1)]],
    quantity : [0,[Validators.required,Validators.min(50)]],
    createdDate:['',Validators.required]
  });

  ngOnInit(): void {
      
  }
  
  // //angular life cycle hooks
  // ngOnInit(): void {
  //   alert("ngOnInit  called");
  //   console.log("triggered ngOnInit")
  // }

  // ngDoCheck(){
  //   console.log("triggered ngDoCheck");
  // }

  // ngAfterContentInit(){
  //   console.log("triggered ngAfterContentInit");
  // }

  // ngAfterContentChecked(){
  //   console.log("triggered ngAfterContentChecked");
  // }

  // ngAfterViewInit(){
  //   console.log("triggered ngAfterViewInit");
  // }

  // ngAfterViewChecked(){
  //   console.log("triggered ngAfterViewChecked");
  // }

  // ngOnDestroy(){
  //   alert("ngOnDestroy Called");
  //   console.log("triggered ngOnDestroy");
  // }
 
  //public showSubmitSuccess:boolean = false;
  isDataUploading:boolean = false;
 
  get f(){
    return this.productForm.controls;
  }
 
  onSubmit(){
    // this.showSubmitSuccess = true;
    // this.productForm.reset();

    const values = this.productForm.value as Product;
    values.createdDate = new Date().toDateString();
    this.productService.addProduct(values as Product).subscribe((res)=>{
      debugger;
      this.productForm.reset();
    });
  }

}
