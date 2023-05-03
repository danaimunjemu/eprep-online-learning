import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { AntDesignModules } from "../../core/modules/antdesign.module";
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    AntDesignModules
  ]
})
export class LandingModule { }
