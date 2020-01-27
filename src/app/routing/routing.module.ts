import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginModule } from '../login/login.module';
import { LoginComponent } from '../login/login/login.component';
import { AppComponent } from '../app.component';

// {path:'login', loadChildren:()=> import("../login/login.module").then(m=> m.LoginModule)},
//                     {path:'register', loadChildren:()=> import("../register/register.module").then(m=> m.RegisterModule)},
//                     {path:'home', loadChildren:()=> import("../home/home.module").then(m=> m.HomeModule)},
//                     {path:'complaints', loadChildren:()=> import("../complaints/complaints.module").then(m=> m.ComplaintsModule)},
//                     {path:'user', loadChildren:()=> import("../user/user.module").then(m=> m.UserModule)},
//                     {path:'agent', loadChildren:()=> import("../agent/agent.module").then(m=> m.AgentModule)},
//                     {path:'customer', loadChildren:()=> import("../customer/customer.module").then(m=> m.CustomerModule)},
//                     {path:'products', loadChildren:()=> import("../products/products.module").then(m=> m.ProductsModule)},
const routes:Routes=[  {path: '', component: AppComponent, children: [{path:'login', loadChildren:()=> import("../login/login.module").then(m=> m.LoginModule)},
{path:'register', loadChildren:()=> import("../register/register.module").then(m=> m.RegisterModule)},
{path:'home', loadChildren:()=> import("../home/home.module").then(m=> m.HomeModule)},
{path:'complaints', loadChildren:()=> import("../complaints/complaints.module").then(m=> m.ComplaintsModule)},
{path:'user', loadChildren:()=> import("../user/user.module").then(m=> m.UserModule)},
{path:'agent', loadChildren:()=> import("../agent/agent.module").then(m=> m.AgentModule)},
{path:'customer', loadChildren:()=> import("../customer/customer.module").then(m=> m.CustomerModule)},
{path:'products', loadChildren:()=> import("../products/products.module").then(m=> m.ProductsModule)},
{path:'sidenav', loadChildren:()=> import("../sidenav/sidenav.module").then(m=> m.SidenavModule)}]},
                      {path:'**', redirectTo:'/login', pathMatch:"full"}]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]
})
export class RoutingModule { }
