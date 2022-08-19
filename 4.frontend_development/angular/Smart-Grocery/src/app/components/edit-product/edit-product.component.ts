import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//importing product model for template  driven form
import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  //get selectedProductId(parent to child data sharing)
  @Input() product!:Product
  isDataUploading = false;

  //cancel editing by closing edit component through product component
  @Output() cancelEditEvent :EventEmitter<void> = new EventEmitter<void>(); 
  constructor(private productService:ProductService) { }

  //update product through event
  @Output() editProductEvent : EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    //alert(this.productId);
  }

  //cancel editing
  cancel(){
    this.cancelEditEvent.emit();
  }

  //submit function
  onSubmit(){
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe(() =>{
      this.isDataUploading=false;
      this.editProductEvent.emit();
      this.cancelEditEvent.emit();
    });
  }
}
