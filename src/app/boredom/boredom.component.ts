import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {
  public boredomdata:any={};
  constructor(private _boredomService:BoredomService){}
  function() {
    this._boredomService.getbordeom().subscribe(
      (data:any)=>{
        this.boredomdata=data;
      },
      (err:any)=>{
        alert("server error");
      }
    )
  }
  }
