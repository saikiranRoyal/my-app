import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  // normal form decalaration in ts
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phone:new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(999999999)]),
      email:new FormControl(null, [Validators.required, Validators.email, emailDomain]),
      // nesetd forms 
      address:new FormGroup(
        {
          city:new FormControl(null, [Validators.required, Validators.minLength(2)]),
          state:new FormControl(),
          pin:new FormControl(null, [Validators.required, Validators.min(100000),Validators.max(999999)]),


        }
      ),
      // form array
      cards:new FormArray([]),
      type:new FormControl(),
      busFee:new FormControl(),
      hostelFee:new FormControl(),
    }
  );
  get cardsFormArray(){
    return this.studentForm.get('cards') as FormArray;
  }
  add(){
    this.cardsFormArray.push(
      new FormGroup(
         { 
                                     
          number:new FormControl(null, [Validators.required, Validators.min(10000000000),Validators.max(99999999999)]),
          expiry:new FormControl(),
          cvv:new FormControl(null, [Validators.required, Validators.min(100), Validators.max(999)]),


        }
      )
    )
  }
  
   delete(i:number){
    this.cardsFormArray.removeAt(i);
   }

  submit(){
    console.log(this.studentForm.value)
  }
}

function emailDomain(control: AbstractControl): ValidationErrors | null{
    if (control.value?.indexOf("@capgemini.com") !=-1){
      return null;
    }
    else{
      return {'emailDomain' : 'email should contain @capgemini.com'}
    }
}

