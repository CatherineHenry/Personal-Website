import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleSidebarIconComponent } from './toggle-sidebar-icon/toggle-sidebar-icon.component';
import { SidebarService } from './sidebar/sidebar.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleSidebarIconComponent,
    SidebarComponent,
    ResumeComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
