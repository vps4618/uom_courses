import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';
import { ContentLimiterPipe } from './content-limiter.pipe';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreProductsComponent,
    ContentLimiterPipe,
    AddProductsComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
