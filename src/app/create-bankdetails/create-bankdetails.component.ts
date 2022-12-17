import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private _sbiBankservice:SbibankService){}
  submit(){
    console.log(this.bankForm.value)
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
