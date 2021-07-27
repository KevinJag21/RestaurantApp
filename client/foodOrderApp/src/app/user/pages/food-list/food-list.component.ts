import { Component, OnInit } from '@angular/core';
import { Dish } from '../../interfaces/dish.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  foodList : Dish[] = [];
  selectDish : Dish = {
    name: '',
    price: 0,
    description: '',
    urlPhoto:   ''
  }
  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.apiSvc.getAvailableFood()
    .subscribe( foodList => this.foodList = foodList);
  }

  showSelectedDish(dish : Dish){
    this.selectDish = dish;
  }

}
