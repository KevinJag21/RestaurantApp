import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/shoppingCart.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingList: CartItem[] = [];

  get shoppingList(): CartItem[] {
    return [...this._shoppingList];
  }

  constructor() { 
    this._shoppingList = JSON.parse(localStorage.getItem('shoppingList')!) || [];
  }

  addItemToCart(item : CartItem){
    //verify item al ready exist
    let array : CartItem[] = [...this._shoppingList];
    let itemExist : boolean = false;
    for (let element of array) {
      if(element.idDish === item.idDish){
        element.quantity += item.quantity; 
        itemExist = true;
        break;
      }
    }
    if(!itemExist){
      array.push(item);
    } 
    this._shoppingList = [...array];
    //set shoppingList in localstorage
    localStorage.setItem('shoppingList', JSON.stringify(this._shoppingList)); 
  }
}
