import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { ApiService } from '../../services/api.service';
import { DishR } from '../../interfaces/dishResponse.interface';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../interfaces/shoppingCart.interface';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
 
  term: string = '';
  foodList : Dish[] = [];
  testList : DishR[] = [];

  testShoppingCart : CartItem[] = [];

  selectDish : Dish = {
    id_Dish: '',
    name: '',
    price: 0,
    description: '',
    urlPhoto:   ''
  }
  constructor(private apiSvc: ApiService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.apiSvc.getAvailableFood()
    .subscribe( foodList => this.foodList = foodList);

    this.apiSvc.getRealFood()
    .subscribe( list => {
      const {data}: any = list;
      this.testList = data;
    });
  }

  showSelectedDish(dish : Dish){
    this.selectDish = dish;
  }

  addToCart(selectedDish? : Dish){
    if(selectedDish) {
      this.selectDish = selectedDish;
      console.log(selectedDish);
    }
    const item : CartItem = {
      idDish: this.selectDish.id_Dish,
      quantity: 1,
      price: this.selectDish.price
      
    }
    
    this.shoppingCartSvc.addItemToCart(item);
    this.testShoppingCart = this.shoppingCartSvc.shoppingList;    
  }

}
