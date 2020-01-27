import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _builder:FormBuilder, private _router:Router) { }

  fields={
    name:["",[Validators.required]],
    mail:["",[Validators.required, Validators.pattern("^[a-z0-9_@-]$")]],
    desg:["",[Validators.required]],
    status:["",[Validators.required]],
    User_Manager:[""],
    User_Executive:[""],
    User_Designation:[""],
    Trainee:[""],
    Active:[""],
    Susupend:[""],
    Terminate:[""],
    Pending:[""]

    

  }

  forms =this._builder.group(this.fields)

  ngOnInit() {
   
  }
  navigateToUserView(){
    alert("User added successfully")
    this._router.navigate(["user/userview"])

  }

}
