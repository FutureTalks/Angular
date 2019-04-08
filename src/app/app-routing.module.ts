import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    {path:'', pathMatch:'prefix', redirectTo: 'home'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'internal', component: LoginPageComponent},
    {path:'*', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
