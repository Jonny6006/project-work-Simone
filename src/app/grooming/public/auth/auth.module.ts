import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedGroomingModule } from '../../shared/shared.module';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,SharedGroomingModule,AuthRoutingModule
  ]
})
export class AuthModule { }
