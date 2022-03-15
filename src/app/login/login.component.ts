import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService, private router:Router) { }
  loginForm:FormGroup=new FormGroup({
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
  }
  SINGIN()
  {
    this.loginservice.login(this.loginForm.value).subscribe(
      (data:any)=>
      {
        alert("login success")
        localStorage.setItem("token",data.token)
        this.router.navigateByUrl("/dashboard")
      },
      (error:any)=>{
        alert("invalid user")
      }
      )
    console.log(this.loginForm);
  }

}
