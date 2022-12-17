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
  public term :any=[]

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
   filter(){
      this._sbiBankServices.getBankdetailsfilter(this.term).subscribe(
        (data:any)=>{
          this.accountdetails=data;
         
  
        },
        (err:any)=>{
          alert("some server errors")
        }
      )
   }
    public column:string="";
    public order:string="";
   sortby(){
    this._sbiBankServices.getBankdetailssort(this.column,this.order).subscribe(
      (data:any)=>{
        this.accountdetails=data;
      },
      (err:any)=>{
        alert("some server errors")
      }
    )
   }
   
   
   delete(id:string){
    this._sbiBankServices.deletebankaccount(id).subscribe(
      (data:any)=>{
        alert("delete succesfully");
        location.reload();

      },
      (err:any)=>{
        alert("some server errors")
      }
    )
   }
  
   page(page:number){
    this._sbiBankServices.getbankpagination(page).subscribe(
      (data:any)=>{
        this.accountdetails=data;
      },
      (err:any)=>{
        alert("some server errors")
      }
      )
}
}
