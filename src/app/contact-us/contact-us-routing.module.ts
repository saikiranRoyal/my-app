import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConatctPhoneComponent } from './conatct-phone/conatct-phone.component';
import { ContactAddressComponent } from './contact-address/contact-address.component';

const routes: Routes = [
  {path:'contact-address', component:ContactAddressComponent},
  {path:'contact-phone', component:ConatctPhoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
