import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-bank-user-details',
  templateUrl: './bank-user-details.component.html',
  styleUrls: ['./bank-user-details.component.css']
})
export class BankUserDetailsComponent {
  
  public bankuserdetails:any={};

  constructor(private _activatedRouter:ActivatedRoute, _sbibankservice:SbibankService){
    this._activatedRouter.params.subscribe(
      (data:any)=>{
        _sbibankservice.Bankuserdetails(data.id).subscribe(
          (data2:any)=>{
            this.bankuserdetails=data2;
          }
        )
      }
    )
  }

}
