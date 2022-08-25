import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemsComponent } from './components/search-items/search-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [{path:'',component:SearchItemsComponent},{path:'item-details/:ITEM_ID',component:ItemDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
