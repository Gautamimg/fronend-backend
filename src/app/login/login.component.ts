import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ServicesService} from '../services.service';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitForm:boolean=false;
  tokendata: any;
  
  constructor(
  private fb:FormBuilder,
  private serve:ServicesService,
  private cookieService: CookieService,
  private route:Router
  ){}

  ngOnInit(): void {
  }

  loginform=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  submit_form(){
  if(this.loginform.valid){
    console.log(this.loginform.value);
    this.serve.userdetails('/login',this.loginform.value).subscribe((res:any)=>{
      console.log(res);
      // this.tokendata=res?.token;
      if(res){
        this.tokendata = res.token;
        localStorage.setItem('userdata',JSON.stringify(res.data));
        console.warn(this.tokendata);
        this.cookieService.set('token', this.tokendata, { expires: 7 });
        this.route.navigate(['/home']); // Expires in 7 days
      }
    })
  }else{
    this.submitForm=true;
  }
  }

}
