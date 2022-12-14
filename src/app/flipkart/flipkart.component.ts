import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public flipkart:any=[]
  constructor(private _flipkartservice:FlipkartService){
    this._flipkartservice.getFlipkartdata().subscribe(
      (data:any)=>{
        this.flipkart=data;
      },
      (err:any)=>{
        alert("some service error");
      }
    )
  }
}
