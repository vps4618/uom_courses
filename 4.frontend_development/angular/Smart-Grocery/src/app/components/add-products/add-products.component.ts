import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }

  //angular life cycle hooks
  ngOnInit(): void {
    alert("ngOnInit  called");
    console.log("triggered ngOnInit")
  }

  ngDoCheck(){
    console.log("triggered ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("triggered ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("triggered ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("triggered ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("triggered ngAfterViewChecked");
  }

  ngOnDestroy(){
    alert("ngOnDestroy Called");
    console.log("triggered ngOnDestroy");
  }

}
