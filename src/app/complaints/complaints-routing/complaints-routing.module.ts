import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsComponent } from '../complaints/complaints.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[{path:'',component:ComplaintsComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ComplaintsRoutingModule { }
