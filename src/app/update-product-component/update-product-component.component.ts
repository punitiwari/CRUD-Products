import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductListServiceService } from '../product-list-service.service';

@Component({
  selector: 'app-update-product-component',
  templateUrl: './update-product-component.component.html',
  styleUrls: ['./update-product-component.component.css']
})
export class UpdateProductComponentComponent implements OnInit {
  public productName!:String;
  public productId!:number;

  constructor(private route: ActivatedRoute,private _productService:ProductListServiceService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap | any) => {
      let id : number = parseInt( params.get('id'));
      this.productId = id;
      let name : string = ( params.get('product'));
      this.productName = name;
    })
  }

  submit(){
    this._productService.updateProduct(this.productId,this.productName).subscribe((data) => {
      alert('data updated')
      this.router.navigate(['/productLists'])
    });
  }

}
