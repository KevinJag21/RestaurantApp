import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'food-list',
        component: FoodListComponent
      },
      {
        path: 'my-profile',
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: 'food-list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
