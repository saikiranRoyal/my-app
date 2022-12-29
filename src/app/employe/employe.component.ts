import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {


  public employeeForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl(null, [Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    DoB: new FormControl(null, [Validators.required]),

    // Nested Form
    Adderess: new FormGroup({
    addressLine:new FormControl(null, [Validators.required, Validators.minLength(50)]),
      city:new FormControl(null, [Validators.required, Validators.minLength(2)]),
      state:new FormControl(null, [Validators.required, Validators.minLength(4)]),
      pincode:new FormControl(null, [Validators.required, Validators.min(100000),Validators.max(999999)]),

      // Double Nested Form
      Location: new FormGroup({
        nearby: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
        landmark: new FormControl()
      }),
    }),
        // FormArray
        Education : new FormArray([]),
        role:new FormControl(),
        html:new FormControl(),
        css:new FormControl(),
        Javascript:new FormControl(),
        Angular:new FormControl(),
        NodeJs:new FormControl(),
        EXpressJs:new FormControl(),
        MongoDB:new FormControl(),
      }
      );

  get employeeEducation(){
    return this.employeeForm.get('Education') as FormArray ;
  }


  add(){
    this.employeeEducation.push(
    new FormGroup ({
      qualification:new FormControl(null, [Validators.required,]),
      year: new FormControl(null, [Validators.required,]),
      percentage: new FormControl(null, [Validators.required,])
        })
  )
  }
  delete(i:number){
    this.employeeEducation.removeAt(i)
  }

  submit(){
    console.log(this.employeeForm)
  }

  
}

