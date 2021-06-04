import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUser } from '../models/interface-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  public getuser(url:string){
    return this.http.get<RequestUser[]>(url);
  }
  public getuserdatos(url:string){
    return this.http.get<RequestUser>(url);
  }
}
