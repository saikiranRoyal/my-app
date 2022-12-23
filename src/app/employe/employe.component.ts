import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent {


  public employeeForm:FormGroup = new FormGroup({
    name: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    DoB: new FormControl(),

    // Nested Form
    Adderess: new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),

      // Double Nested Form
      Location: new FormGroup({
        nearby: new FormControl(),
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
      qualification:new FormControl(),
      year: new FormControl(),
      percentage: new FormControl()
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

