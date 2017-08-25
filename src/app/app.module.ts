import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { FullDashboardComponent } from './layouts/full-dashboard/full-dashboard.component';
import { SimpleDashboardComponent } from './layouts/simple-dashboard/simple-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components1/employee/employee.component';
import {  AppRouter} from "./app.router";
@NgModule({
  declarations: [
    AppComponent,
    FullDashboardComponent,
    SimpleDashboardComponent,
   
  ],
  imports: [
    BrowserModule,AppRouter
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
