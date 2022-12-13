import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
 public details:any=[]
 public keys: any=[];
 
 constructor(private _productsservice:ProductsService){
  this.details=_productsservice.productdetails;
  this.keys=Object.keys(this.details[0]);
 }
 
 sort(){
  // this.details=this.details.sort((a:any,b:any)=>a.name-b.name);
  this.details=this.details.sort((a:any,b:any)=>a.price-b.price);

 }

}
