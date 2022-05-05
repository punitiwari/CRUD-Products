import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponentComponent } from './create-product-component/create-product-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { UpdateProductComponentComponent } from './update-product-component/update-product-component.component';

const routes: Routes = [
  { path : "", redirectTo:'/productLists',pathMatch:"full"},
  { path : "productLists", component : ProductListComponentComponent},
  { path : "create", component : CreateProductComponentComponent},
  { path : "update", component : UpdateProductComponentComponent},
  { path : "**", component : NotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
