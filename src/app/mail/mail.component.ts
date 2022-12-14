import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  public maildata:any=[];
  constructor(private _mailService:MailService){
   this._mailService.getMail().subscribe(
    (data:any)=>{
      this.maildata=data;
    },
    (err:any)=>{
      alert("server error")
    }
   )
  }
}
