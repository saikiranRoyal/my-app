import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input()  public a :number=10;
   public b:number=0;
   @Output() bEvent:EventEmitter<number>=new EventEmitter();
   send(){
      this.bEvent.emit(this.b);
   }
}