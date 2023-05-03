import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AntDesignModules } from "../../core/modules/antdesign.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AntDesignModules
  ]
})
export class AuthModule { }
