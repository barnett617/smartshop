import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// service
import './services/init';
import { HttpService } from '../app/services/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
