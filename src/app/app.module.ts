import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { CreateProductComponentComponent } from './create-product-component/create-product-component.component';
import { UpdateProductComponentComponent } from './update-product-component/update-product-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    NotFoundComponentComponent,
    CreateProductComponentComponent,
    UpdateProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
