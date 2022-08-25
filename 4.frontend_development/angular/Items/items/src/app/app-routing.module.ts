import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemsComponent } from './components/search-items/search-items.component';

const routes: Routes = [{path:'',component:SearchItemsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
