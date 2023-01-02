 import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-create-bankdetails',
  templateUrl: './create-bankdetails.component.html',
  styleUrls: ['./create-bankdetails.component.css']
})
export class CreateBankdetailsComponent {
  public bankForm:FormGroup= new FormGroup(
    {
       createdAt:new FormControl(),
       account_name:new FormControl(),
       available_balance:new FormControl(),
       currency:new FormControl(),
       user_image:new FormControl(),
       account_number:new FormControl()
      

    }
  )
  public isEdit:boolean=false;
  public id:string="";

  constructor(private _sbiBankservice:SbibankService, private _activeRouter:ActivatedRoute, private _router:Router){
    this._activeRouter.params.subscribe(
      (data:any)=>{
        if(data.id){
          this.isEdit=true;
          this.id=data.id;
        }
        this._sbiBankservice.Bankuserdetails(data.id).subscribe(
          (data2:any)=>{
            // to attach data to form
            this.bankForm.patchValue(data2)

          }
          )
      }
    )
  }
  submit(){
    console.log(this.bankForm.value)

     if(this.isEdit){
      this._sbiBankservice.updatebankdetails(this.bankForm.value,this.id).subscribe(
        (data:any)=>{
          alert('update successfully')
          this._router.navigateByUrl("/dashboard/sbibank")
        },
        (err:any)=>{
          alert('not successfully')

        }
      )
     }
    else{
      this._sbiBankservice.createbankdetails(this.bankForm.value).subscribe(
        (data:any) => {
          alert("created successfully")
        },
        (err:any) =>{
          alert('not created')
        }
      )
    }
    }

}
