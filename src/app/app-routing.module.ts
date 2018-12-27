import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { LoginComponent } from '../app/components/login/login.component'
import { HomeComponent } from '../app/components/home/home.component'
import { AdminLoginComponent } from '../app/components/admin-login/admin-login.component'
import { AdminHomeComponent } from '../app/components/admin-home/admin-home.component'

// service

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/admin-login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
];



@NgModule({
  imports: [
    // 如果不用哈希路由的话，开了代理之后会有bug
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
