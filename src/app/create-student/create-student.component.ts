import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          state:new FormControl(),
          pin:new FormControl(),


        }
      ),
      cards:new FormArray([])
       
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

  submit(){
    console.log(this.studentForm.value)
  }
}