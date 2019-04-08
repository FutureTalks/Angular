import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {path:'', pathMatch:'prefix', redirectTo: 'home'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'login', component: LoginPageComponent},
    {path:'private', component: PrivateComponent, canActivate: [AuthGuard]},
    {path:'*', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
