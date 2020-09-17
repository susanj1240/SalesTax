import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _basket: Map<string, Item>;
  private item: Item;
  private key: string;


  constructor() {
    this._basket = new Map();
  }

  addToBasket(name: string, price: number, amount: number, imported: boolean){
    this.item = new Item(name, price, amount, imported);

    this.key = (imported ? "imported " : "") + name;

    // If the item is already in basekt
    if(this._basket.has(this.key)){
      let amountOfItem = this._basket.get(this.key).amount + 1;
      this._basket.get(this.key).setAmount(amountOfItem);
    } else{
      this._basket.set(this.key, this.item);

    }

  }

  get basket(){
    return this._basket;
  }
}
