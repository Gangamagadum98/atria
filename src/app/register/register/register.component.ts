import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router, private _builder:FormBuilder) { }
  
  fields={
    firstname:["",[Validators.required]],
    lastname:["",[Validators.required]],
    email:["",[Validators.required]],
    password:["",[Validators.required]],
    confirmpassword:["",[Validators.required]],
    phno:["",[Validators.required]],
    male:[""],
    female:[""],
    other:[""],
    date:["",[Validators.required]]
  }

  form=this._builder.group(this.fields)
  
  register(){
    console.log(this.form.value)
    let userObj = JSON.stringify(this.form.value)
    localStorage.setItem(this.form.get('email').value,userObj)
    this._router.navigate(["login"])
  }
  

  ngOnInit() {
  }

}
