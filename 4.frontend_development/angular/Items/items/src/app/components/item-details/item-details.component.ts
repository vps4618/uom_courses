import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  public item !:Product[]; 
  constructor(private productservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let selectedItemId = this.route.snapshot.paramMap.get('ITEM_ID');
    this.productservice.getProductById(selectedItemId).subscribe((res)=>{
      this.item = res;
    }) 
  }    
}
