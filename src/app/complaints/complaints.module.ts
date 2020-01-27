import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintsRoutingModule } from './complaints-routing/complaints-routing.module';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    SidenavModule
  
  ]
})
export class ComplaintsModule { }
