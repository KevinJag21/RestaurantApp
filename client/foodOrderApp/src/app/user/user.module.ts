import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    FoodListComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class UserModule { }
