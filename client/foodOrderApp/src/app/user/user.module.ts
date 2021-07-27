import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FoodListComponent } from './pages/food-list/food-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class UserModule { }
