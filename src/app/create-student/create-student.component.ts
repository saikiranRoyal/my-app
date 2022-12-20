import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  // normal form decalaration in ts
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      // nesetd forms 
      address:new FormGroup(
        {
          city:new FormControl(),
          state:new FormControl(),
          pin:new FormControl(),


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
          number:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl(),


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
