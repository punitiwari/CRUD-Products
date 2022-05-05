import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor(private http : HttpClient) { }

  getProductList():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:3000/products');
  }

  updateProduct(pid:number,pName:String){
    return this.http.put<any>('http://localhost:3000/updateProduct', { 
      name: pName,
      id : pid
    })
  }

  addProduct(pName:String){
    return this.http.post<any>('http://localhost:3000/addProduct', { 
      name: pName,
    })
  }

  deleteProduct(pid:number){
    return this.http.delete('http://localhost:3000/deleteProduct'+ pid)
  }

}
