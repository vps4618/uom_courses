import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  constructor(private fb:FormBuilder) { }

  productForm =this.fb.group({
    productName:['',Validators.required],
    description : ['',Validators.required],
    category : ['',Validators.required],
    brand : ['',Validators.required],
    expiredDate:['',Validators.required],
    manufacturedDate : ['',Validators.required],
    batchNumber : ['',Validators.required],
    unitPrice : ['',[Validators.required,Validators.min(1)]],
    quantity : ['',[Validators.required,Validators.min(50)]]
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
 isDataUploading:boolean = false;
 onSubmit(){

 }

 get f(){
   return this.productForm.controls;
 }
}
