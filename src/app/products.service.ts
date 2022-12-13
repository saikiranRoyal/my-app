import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productdetails:any =[{name:"oppo", price:10000, quantity:0, rating:4},
  {name:"pocco", price:8000, quantity:0, rating:2},
  {name:"nokia", price:15000, quantity:0, rating:4},
  {name:"samsung", price:20000, quantity:0, rating:0},
  {name:"iphone", price:9000, quantity:0, rating:5},
]
  constructor() { }
  
}
