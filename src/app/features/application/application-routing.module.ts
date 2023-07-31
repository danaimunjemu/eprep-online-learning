import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./shared/app/app.component";
import {StudentDashboardComponent} from "./learner/pages/student-dashboard/student-dashboard.component";
import {CoursesComponent} from "./learner/pages/courses/courses.component";
import {BlogComponent} from "./learner/pages/blog/blog.component";
import {ArticleComponent} from "./learner/pages/blog/article/article.component";
import {BrowseComponent} from "./learner/pages/blog/browse/browse.component";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: AppComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StudentDashboardComponent},
      { path: 'courses', component: CoursesComponent},
      { path: 'blog', component: BlogComponent ,
        children: [
          { path: '', redirectTo: 'browse', pathMatch: 'full' },
          { path: 'browse', component: BrowseComponent},
          { path: 'article', component: ArticleComponent},
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
