import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpUser={

  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signUp(){
    this.auth.signUpUser(this.signUpUser)
      .subscribe(
        res => {
          console.log(res)
          
        },
        err => console.log(err)
      )
  }

}