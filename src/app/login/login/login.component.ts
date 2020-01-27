import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={email:'',pass:''}
  error:boolean

  constructor(private _router:Router) { }

  navigateToRegister(){
    this._router.navigate(["/register"])
  }
  authenticate(){
    if(this.user.email!=null){
      let userString = JSON.parse(localStorage.getItem(this.user.email))
      if(userString!=null){
        if(this.user.email==userString.email && this.user.pass==userString.password){
          this.error=false
          sessionStorage.setItem("email",this.user.email)
          sessionStorage.setItem("name",userString.firstname)
          this._router.navigate(["/home"])
        }
      }
      else{
        this.error=true
      }


    }
    
  }

  ngOnInit() {
  }

}
