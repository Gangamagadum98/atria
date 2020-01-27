import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsviewComponent } from '../productsview/productsview.component';

const routes:Routes=[{path:'',component:ProductsviewComponent},
{path:'',component:ProductsviewComponent}]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
