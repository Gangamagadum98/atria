import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { UserviewComponent } from './userview/userview.component';
import { HomeModule } from '../home/home.module';
import {MatTableModule} from '@angular/material/table';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddUserComponent } from './add-user/add-user.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';





@NgModule({
  declarations: [UserComponent, UserviewComponent, AddUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HomeModule,
    MatTableModule,
    MatSidenavModule,
    SidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  
  ]
})
export class UserModule { }
