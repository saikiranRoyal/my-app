import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-from',
  templateUrl: './employee-from.component.html',
  styleUrls: ['./employee-from.component.css']
})
export class EmployeeFromComponent {
  public employeform:FormGroup=new FormGroup(
    {
      Name:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressLine:new FormControl(),
          city:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl(),
          location:new FormGroup(
            {
              nearBy:new FormControl(),
              landMark:new FormControl(),
            }
          )
        }
      ),
      
    }
  )
  submit(){
    console.log(this.employeform)
  }
  
}

