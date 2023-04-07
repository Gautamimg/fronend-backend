import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) {}
  userdetails(url:any,data:any){
   return this.http.post('http://localhost:3000'+url,data)
  }
}
