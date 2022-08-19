import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {
  public selectedProduct !:Product;
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let selectedProductId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(selectedProductId).subscribe((res=>{
      this.selectedProduct = res.data;
    }))
  }

  childMessage : string = "";
  
}
