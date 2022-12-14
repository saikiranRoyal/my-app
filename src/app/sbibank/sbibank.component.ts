import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-sbibank',
  templateUrl: './sbibank.component.html',
  styleUrls: ['./sbibank.component.css']
})
export class SbibankComponent {
  public accountdetails:any=[]
  public keys :any = []

   constructor(private _sbiBankServices:SbibankService){
    this._sbiBankServices.getBankdetails().subscribe(
      (data:any)=>{
        this.accountdetails=data;
        this.keys = Object.keys(data[0])

      },
      (err:any)=>{
        alert("some server errors")
      }
    )
   }
}
