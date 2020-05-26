import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private signUpURL = "http://localhost:4200/api/user"
private loginURL = "http://localhost:3003/api/auth"

  constructor(private http: HttpClient) { }

  signUpUser(user){
     return this.http.post<any>(this.signUpURL, user)
    
  }

}
