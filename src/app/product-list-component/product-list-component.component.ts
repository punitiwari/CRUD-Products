import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListServiceService } from '../product-list-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  public products_list: any[] = [];
  constructor(private router:Router,private _productService:ProductListServiceService) { }

  ngOnInit(): void {
    this._productService.getProductList().subscribe((data) => {
      this.products_list = data;
      console.log(data);
      
    });
  }
  goToCreate(){
    this.router.navigate(['/create'])
  }
  goToUpdate(product: any){
    this.router.navigate(['/update',{id:product.id,product:product.product_Name}])
  }

  delete(id:number){
    this._productService.deleteProduct(id).subscribe((data) => {
      this._productService.getProductList().subscribe((data) => {
        this.products_list = data;
        console.log(data);
        
      });
      
    });
  }
}
