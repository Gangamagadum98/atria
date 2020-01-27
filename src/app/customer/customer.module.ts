import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SidenavModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ]
})
export class CustomerModule { }
