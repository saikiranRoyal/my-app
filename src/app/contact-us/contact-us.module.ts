import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ConatctPhoneComponent } from './conatct-phone/conatct-phone.component';


@NgModule({
  declarations: [
    ContactAddressComponent,
    ConatctPhoneComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
