import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InteractionComponent } from './interaction/interaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { HttpClientModule } from '@angular/common/http';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductlistComponent } from './shopping/productlist/productlist.component';
import { ProductdetailsComponent } from './shopping/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InteractionComponent,
    DashboardComponent,
    CreateemployeeComponent,
    AllemployeesComponent,
    EmployeedetailsComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    ShoppingComponent,
    ProductlistComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContactUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
