import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListServiceService } from '../product-list-service.service';

@Component({
  selector: 'app-create-product-component',
  templateUrl: './create-product-component.component.html',
  styleUrls: ['./create-product-component.component.css']
})
export class CreateProductComponentComponent implements OnInit {
  public productName:String = "";
  constructor(private router:Router,private _productService:ProductListServiceService) { }

  ngOnInit(): void {
  }
  add(pNmae:String){
    this._productService.addProduct(pNmae).subscribe((data) => {
      
      alert('Product created')
      this.router.navigate(['/productLists'])
    });
  }
}
