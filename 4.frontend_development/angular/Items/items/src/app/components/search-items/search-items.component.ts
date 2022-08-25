import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { productResponse } from 'src/app/models/product-response.model';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  public selectedProduct !:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.productService.getProductByName('munchee').subscribe((res=>{
    //   this.selectedProduct = res;
    //   console.log(this.selectedProduct);
    // }))
  }
  searchItems(){
    this.productService.getProductByName('munchee').subscribe((res=>{
      this.selectedProduct = res;
    }))
 }
}
