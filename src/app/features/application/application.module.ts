import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';

import { AntDesignModules } from "../../core/modules/antdesign.module";
import { AppComponent } from './shared/app/app.component';
import { FormsModule } from "@angular/forms";
import { CoursesComponent } from './learner/pages/courses/courses.component';
import { StudentDashboardComponent } from './learner/pages/student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    AntDesignModules,
    FormsModule
  ]
})
export class ApplicationModule { }
