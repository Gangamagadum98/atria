import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsviewComponent } from './productsview/productsview.component';
import { ProductsRoutingModule } from './products-routing/products-routing.module';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
  declarations: [ProductsviewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SidenavModule
  ]
})
export class ProductsModule { }
