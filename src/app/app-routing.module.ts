import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { LoginComponent } from '../app/components/login/login.component'
import { HomeComponent } from '../app/components/home/home.component'
import { AdminLoginComponent } from '../app/components/admin-login/admin-login.component'
import { AdminHomeComponent } from '../app/components/admin-home/admin-home.component'
import { AdminGoodsManageComponent } from './components/admin-goods-manage/admin-goods-manage.component';
import { AdminGoodsEditComponent } from './components/admin-goods-edit/admin-goods-edit.component';
import { AdminDishManageComponent } from './components/admin-dish-manage/admin-dish-manage.component';
import { AdminDishEditComponent } from './components/admin-dish-edit/admin-dish-edit.component';
import { AdminUserManageComponent } from './components/admin-user-manage/admin-user-manage.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { AdminOrderManageComponent } from './components/admin-order-manage/admin-order-manage.component';

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
    component: AdminHomeComponent,
    children: [
      {
        path: 'goods-manage',
        component: AdminGoodsManageComponent
      },
      {
        path: 'goods-edit',
        component: AdminGoodsEditComponent
      },
      {
        path: 'dish-manage',
        component: AdminDishManageComponent
      },
      {
        path: 'dish-edit',
        component: AdminDishEditComponent
      },
      {
        path: 'user-manage',
        component: AdminUserManageComponent
      },
      {
        path: 'user-edit',
        component: AdminUserEditComponent
      },
      {
        path: 'order-manage',
        component: AdminOrderManageComponent
      },
    ]
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
