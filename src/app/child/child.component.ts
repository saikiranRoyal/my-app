import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public a: number=0;

  @Output() bEvent:EventEmitter<any>=new EventEmitter();

  send(){
    this.bEvent.emit(20);
  }
}
