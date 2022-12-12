import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {
  public amount:number=0;
  constructor(private _bankService:BankService){}
  withdraw(){
   this._bankService.withdraw(this.amount)
  }
  deposit(){
    this._bankService.deposit(this.amount)
  }
  showbalance(){
alert(this._bankService.showbalance())  }

}
