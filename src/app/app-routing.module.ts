import { Component, NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AuthenticationGuard } from './authentication.guard';
import { BankUserDetailsComponent } from './bank-user-details/bank-user-details.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateBankdetailsComponent } from './create-bankdetails/create-bankdetails.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserAccountComponent } from './registration/create-user-account/create-user-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeComponent } from './employe/employe.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:"home", component:HomeComponent},
    {path:"calculator", component: CalculatorComponent},
    {path:"data-binding", component: DataBindingComponent},
    {path:"rectangle", component:RectangleComponent},
    {path:"directives", component:DirectivesComponent},
    {path:"gpay", component:GpayComponent},
    {path:"products", component:ProductsComponent},
    {path:"vehicle", component:VehicleComponent},
    {path:"sbibank", component:SbibankComponent},
    {path:"flipkart", component:FlipkartComponent},
    {path:"mail", component:MailComponent},
    {path:"boredom", component:BoredomComponent},
    {path:"create-vehicle", component:CreateVehicleComponent,  canDeactivate:[NotifyGuard]},
    {path:"create-bankdetails", component:CreateBankdetailsComponent},
    {path:"create-student", component:CreateStudentComponent, canDeactivate:[NotifyGuard]},
    {path:'employee', component:EmployeComponent, canDeactivate:[NotifyGuard]},
    {path:'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'bank-user-details/:id', component:BankUserDetailsComponent},
    {path:'edit-bank/:id', component:CreateBankdetailsComponent},
    {path:"about-company", component:AboutCompanyComponent},
    {path:"user-account", component:CreateUserAccountComponent},
    {path:"parent", component:ParentComponent},
    {path:"sibling1", component:Sibling1Component},
    {path:"sibling2", component:Sibling2Component},
    {
      path: 'contact-us',
      loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
    }

  ]},
  // {path:"calculator", component: CalculatorComponent},
  {path:"", component: LoginComponent},
  {path:"**", component: PagenotfoundComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
