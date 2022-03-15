import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeedetailsService } from '../employeedetails.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  details:any={};
  employees:any=[];
  
  constructor(private activatedRoute:ActivatedRoute,private employeedetailsService:EmployeedetailsService) 
  { 
    this.activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id); 
        this.getdetails(data.id);       
      }
    )    
  }
  getdetails(id:any){
    this.employeedetailsService.employeedetails(id).subscribe(
      (data:any)=>
      {
       this.details=data;
      }
    )
  }
 

  ngOnInit(): void {
  }

}
