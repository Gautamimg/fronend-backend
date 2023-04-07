import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitForm:boolean=false;

  constructor(private fb:FormBuilder,private serve:ServicesService) {}

  ngOnInit(): void {
  }

  registerform=this.fb.group({
    name:["",Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })

  submit_form(){
  if(this.registerform.valid){
    console.log(this.registerform.value);
    this.serve.userdetails('/register',this.registerform.value).subscribe((res)=>{
      console.log(res);
      if(res){
        
      }
    })
  }else{
    this.submitForm=true;
  }
  }

}
