import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';




@NgModule({
  declarations: [CreateUserAccountComponent,],
  imports: [
    CommonModule
  ],
  exports: [
  CreateUserAccountComponent
  ]
})
export class RegistrationModule { }
