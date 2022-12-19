import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl(),

    }
    
  )
  constructor(private _loginService:LoginServiceService) {}
  submit(){
    console.log(this.loginForm.value)
    this._loginService.loginAuthentication(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login successfull")
      },
      (err:any)=>{
        alert("incorrect  password or username")
      }
    )
  }
}
