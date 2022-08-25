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
    // this.productService.getAllProducts().subscribe((res) => {
    //   this.selectedProduct =  res;
    // })
  }

  searchItems(){
    setTimeout(() => {
      const inputField = document.getElementById('input') as HTMLInputElement;
      const input = inputField.value;
      const selector = document.getElementById('selector') as HTMLSelectElement;
      const value = selector.options[selector.selectedIndex].value;
      if(value=='1'){
      this.productService.getProductByName(input).subscribe((res=>{
        this.selectedProduct = res;
      }))
      }else if(value == '3'){
        this.productService.getProductByBarcode(input).subscribe((res) => {
          this.selectedProduct = res;
        })
      }else if(value == '2'){
      this.productService.getProductBySinhalaName(input).subscribe((res)=>{
        this.selectedProduct = res;
      }) 
      }else if(value == '4'){
        this.productService.getProductByCostPrice(input).subscribe((res) => {
          this.selectedProduct = res;
        })
      }else if(value == '5'){
        this.productService.getProductByWholesale(input).subscribe((res) => {
          this.selectedProduct = res;
        })
      }else if(value == '6'){
        this.productService.getProductByBillPrice(input).subscribe((res) => {
          this.selectedProduct = res;
        })
      }else if(value == '7'){
        this.productService.getProductBySalePrice(input).subscribe((res) => {
          this.selectedProduct = res;
        })
      }else{
        alert('Please select input type');
      }
    },1000)
    
 }
 
}
