import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllemployeeService } from '../allemployee.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  allemployees:any=[];
  column="";
  page="";
  order="";
  limit=10;
  Next()
  {
    this.allemployeeService.getpageallemployees(this.page,this.limit).subscribe(
      (data:any)=>{
        this.allemployees=data;
      },
      (error:any)=>{
        alert("serverdown")
      }
    )
  }
  sort()
  {
    this.allemployeeService.getSortByallemployees(this.column,this.order).subscribe(
      (data:any)=>
      {
        this.allemployees=data;
      },
      (error:any)=>
      {
        alert("serverdown")
      }
    )
  }
  search="";
  filter()
  {
    this.allemployeeService.getFilteredallemployees(this.search).subscribe(
      (data:any)=>
      {
        this.allemployees=data;
      },
      (error:any)=>
      {
        alert("serverdown");
      }
    )
  }
  constructor(private allemployeeService:AllemployeeService,private router:Router) 
  { 
   this.allemployeeService.getallemployees().subscribe(
     (data:any)=>{
       this.allemployees=data;
     },
     (error:any)=>{
       alert("serverdown");
     }
   )
  }

  ngOnInit(): void {
  }
  view(id:any)
  {
    this.router.navigateByUrl("/dashboard/employeedetails/"+id);
  }

}
