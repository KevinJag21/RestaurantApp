import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { LoggedGuard } from './auth/guards/logged.guard';

const routes : Routes = [
  {
    path : '',
    redirectTo: 'user/food-list',
    pathMatch: 'full'
  },
  {
    path : 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canLoad: [LoggedGuard],
    canActivate: [LoggedGuard] 
  },
  {
    path : 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule ),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard] 
  },
  {
    path : '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo : '404'
  }
] 


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
