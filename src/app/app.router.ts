import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullDashboardComponent} from './layouts/full-dashboard/full-dashboard.component';
import {SimpleDashboardComponent} from './layouts/simple-dashboard/simple-dashboard.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: FullDashboardComponent,
      data: {
        title: 'Home'
      },
      children: [
        {
          path: 'dashboard',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        }
      ]
    },
    {
      path: 'pages',
      component: SimpleDashboardComponent,
      data: {
        title: 'Pages'
      },
      children: [
        {
          path: '',
          loadChildren: './pages/pages.module#PagesModule',
        }
      ]
    }
  ];
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRouter {
}
