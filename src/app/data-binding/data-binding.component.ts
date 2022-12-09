import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public name:string='saikiran';
  public age:number=20;
  public isIndian:boolean=true;
  public phone:number=0;
 test(){
    alert("submited");
 }
 
 test2(){
  alert("cancel double clicked");
}
test3(){
  alert("key pressed")
}
test4(){
  alert("mouse entered")
}
test5(){
  alert("mouse entered")
}
}

 