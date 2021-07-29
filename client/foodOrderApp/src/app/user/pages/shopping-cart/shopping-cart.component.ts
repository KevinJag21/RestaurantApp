import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem, shoppingCart } from '../../interfaces/shoppingCart.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent implements OnInit {


  cartItemList : CartItem[] = [];

  constructor(private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItemList = this.shoppingCartSvc.shoppingList;
  }

}
