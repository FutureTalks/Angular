import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthGuard } from './guard/auth.guard';
import { ManagerPanelComponent } from './pages/manager-panel/manager-panel.component';

const routes: Routes = [
    {path:'', pathMatch:'prefix', redirectTo: 'home'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'login', component: LoginPageComponent},
    {path:'private', component: PrivateComponent, canActivate: [AuthGuard]},
    {path:'manager', component: ManagerPanelComponent, canActivate: [AuthGuard]},
    {path:'*', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
