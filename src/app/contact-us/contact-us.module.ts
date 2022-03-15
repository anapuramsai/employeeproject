import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './company-info/company-info.component';



@NgModule({
  declarations: [
    CompanyInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CompanyInfoComponent
  ]
})
export class ContactUsModule { }
