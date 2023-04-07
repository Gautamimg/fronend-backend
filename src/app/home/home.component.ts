import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
UserData:any;
  constructor(private cookiese:CookieService,
    private route:Router) { }

  ngOnInit(): void {
    this.UserData=JSON.parse(localStorage.getItem('userdata')||('userdata'))
  }
  
  logout(){
this.cookiese.delete('token');
this.route.navigate(['/']);
  }

}
