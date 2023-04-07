import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GuardAuthguradGuard implements CanActivate {
  constructor(private cookieService: CookieService,private route:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.cookieService.get('token') !=null){
      return true;
    }else{
      this.route.navigate(['/']);
      return false;
    }

  }
  
}
