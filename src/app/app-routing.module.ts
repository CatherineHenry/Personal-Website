import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';


//good read on routing https://angular.io/tutorial/toh-pt5
const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full'}, {path: 'home' , component: HomeComponent}, {path: 'resume', component: ResumeComponent}, {path: 'projects', component: ProjectsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
