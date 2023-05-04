import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AntDesignModules } from "../../core/modules/antdesign.module";
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './pages/signup/signup.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CheckEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AntDesignModules,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
