import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor() { 
    this.createemployeeForm.get('role')?.valueChanges.subscribe(
      data=>{
        if(data=='Frontend Engineer')
        {
          this.createemployeeForm.addControl('HTML',new FormControl());
          this.createemployeeForm.addControl('CSS',new FormControl());
          this.createemployeeForm.addControl('Angular',new FormControl());
          this.createemployeeForm.addControl('Javascript',new FormControl());
          this.createemployeeForm.removeControl('NodeJs')
          this.createemployeeForm.removeControl('ExpressJs');
          this.createemployeeForm.removeControl('MongoDB');
        }
        else
        {
          this.createemployeeForm.addControl('NodeJs',new FormControl());
          this.createemployeeForm.addControl('ExpressJs',new FormControl());
          this.createemployeeForm.addControl('MongoDB',new FormControl());
          this.createemployeeForm.removeControl('HTML');
          this.createemployeeForm.removeControl('CSS');
          this.createemployeeForm.removeControl('Angular');
          this.createemployeeForm.removeControl('Javascript');          
        }
      }
    )
  }
  createemployeeForm: FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    mobile:new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    dod:new FormControl(null,[Validators.required]),
    address:new FormGroup({
      addressLine:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    education:new FormArray([]),
    role:new FormControl(),
  })

  ngOnInit(): void {
  }
  submit()
  {
    console.log(this.createemployeeForm);
  }
  get educationFormArray()
  {
   return this.createemployeeForm.get('education') as FormArray;
  }
  add()
  {
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl(null,[Validators.required]),
        year:new FormControl(null,[Validators.required]),
        percentage:new FormControl(null,[Validators.required]),
      })
    )
  }
  delete(i:any)
  {
    this.educationFormArray.removeAt(i);
  }

}

