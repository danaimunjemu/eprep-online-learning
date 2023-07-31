import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';

import { AntDesignModules } from "../../core/modules/antdesign.module";
import { AppComponent } from './shared/app/app.component';
import { FormsModule } from "@angular/forms";
import { CoursesComponent } from './learner/pages/courses/courses.component';
import { StudentDashboardComponent } from './learner/pages/student-dashboard/student-dashboard.component';
import { BlogComponent } from './learner/pages/blog/blog.component';
import { ArticleComponent } from './learner/pages/blog/article/article.component';
import { BrowseComponent } from './learner/pages/blog/browse/browse.component';
import { TextEditorComponent } from './shared/components/text-editor/text-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ScrollableDirective } from "../../core/directives/scrollable.directive";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentDashboardComponent,
    BlogComponent,
    ArticleComponent,
    BrowseComponent,
    TextEditorComponent,
    ScrollableDirective
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    AntDesignModules,
    FormsModule,
    AngularEditorModule,
  ]
})
export class ApplicationModule { }
