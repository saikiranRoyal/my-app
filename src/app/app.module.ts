import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SbibankComponent } from './sbibank/sbibank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankdetailsComponent } from './create-bankdetails/create-bankdetails.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EmployeComponent } from './employe/employe.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankUserDetailsComponent } from './bank-user-details/bank-user-details.component';
import { AboutUsModule } from './about-us/about-us.module';
import { StarsComponent } from './stars/stars.component';
import { RegistrationModule } from './registration/registration.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { PricePipe } from './price.pipe';
import { YearPipe } from './year.pipe';
import { ImpDirective } from './imp.directive';
import { provideCloudflareLoader } from '@angular/common';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    HomeComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    GpayComponent,
    ProductsComponent,
    VehicleComponent,
    SbibankComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateBankdetailsComponent,
    CreateStudentComponent,

    EmployeComponent,
     VehicleDetailsComponent,
     BankUserDetailsComponent,
     StarsComponent,
     ParentComponent,
     ChildComponent,
     Sibling1Component,
     Sibling2Component,
     PricePipe,
     YearPipe,
     ImpDirective,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
    RegistrationModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
