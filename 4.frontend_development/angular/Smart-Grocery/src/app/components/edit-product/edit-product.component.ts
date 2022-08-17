import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  //get selectedProductId(parent to child data sharing)
  @Input() productId !:number

  //cancel editing by closing edit component through product component
  @Output() cancelEditEvent :EventEmitter<void> = new EventEmitter<void>(); 
  constructor() { }

  ngOnInit(): void {
    //alert(this.productId);
  }

  //cancel editing
  cancel(){
    this.cancelEditEvent.emit();
  }
}
