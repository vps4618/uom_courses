import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';
import { ContentLimiterPipe } from './content-limiter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreProductsComponent,
    ContentLimiterPipe,],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
