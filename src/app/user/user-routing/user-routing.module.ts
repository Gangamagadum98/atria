import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { UserviewComponent } from '../userview/userview.component';
import { AddUserComponent } from '../add-user/add-user.component';

const routes:Routes=[{path:'',component:UserComponent},
{path:'userview',component:UserviewComponent},
{path:'adduser',component:AddUserComponent}]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
