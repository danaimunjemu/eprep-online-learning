import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';

import { AntDesignModules } from "../../core/modules/antdesign.module";
import { AppComponent } from './shared/app/app.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    AntDesignModules,
    FormsModule
  ]
})
export class ApplicationModule { }
