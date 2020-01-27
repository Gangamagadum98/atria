import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {

  user_id:number;
  name: string;
  email: string;
  status: string;
  designation:string;
  action:string;
  
 
  
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {user_id: 1, name: 'seema', email: "seema@gmail.com", status: 'active',designation:'User Executive',action:'view'},
  {user_id: 2, name: 'shariyu', email: "shariyu@gmail.com", status: 'suspend', designation:'User Manager',action:'view'},
  {user_id: 3, name: 'lata', email: "lata@gmail.com", status: 'pending',designation:'Designation',action:'view'},
  {user_id: 4, name: 'anu', email: "anu@gmail.com", status: 'terminate',designation:' Trainer',action:'view'},
  {user_id: 5, name: 'sahana', email: "sahana@gmail.com", status: 'suspend',designation:'User Executive',action:'view'},
  {user_id: 6, name: 'sandya', email: "sandya@gmail.com", status: 'active',designation:'User Executive',action:'view'},
  {user_id: 7, name: 'suma', email: "suma@gmail.com", status: 'pending',designation:'User Manager',action:'view'},
  {user_id: 8, name: 'raani', email: "raani@gmail.com", status: 'terminate',designation:'User Executive',action:'view'},
  {user_id: 9, name: 'geeta', email: "seema@gmail.com", status: 'active',designation:'User Manager',action:'view'},
  {user_id: 10, name: 'aishu', email: "seema@gmail.com", status: 'suspend',designation:'Trainee',action:'view'},
];


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  opened=false

  constructor(private _router:Router) { }


  displayedColumns: string[] = ['user_id', 'name', 'email', 'status','designation','Action'];
  dataSource = ELEMENT_DATA;


  
  ngOnInit() {
  }

  navigateToAddUser(){
    this._router.navigate(["user/adduser"])
  }

}
