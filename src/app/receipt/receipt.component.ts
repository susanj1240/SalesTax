import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {BasketService} from '../basket/basket.service';
import {StoreService} from '../store/store.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  showReceipt: boolean;

  saleTax: number = 0.1;
  importTax: number = 0.05;
  basket: Map<string,Item>;

  totalTax: number;
  totalPrice: number;

  constructor(private basketService: BasketService,private storeService: StoreService ) {

    this.basket = basketService.basket;

    this.showReceipt = false;

    this.totalTax=0;
    this.totalPrice=0;

  }

  ngOnInit(): void {
  }

  //Calculates tax of an item
  calculateTax(item: Item){
    let tax = 0;
    //sale tax
    if(!this.storeService.exemptFromSaleTax(item.name)){
      console.log(item.name);
      tax += item.price * this.saleTax;
    }

    //import tax
    if(item.imported){
      tax= tax+ item.price * this.importTax;
    }

    //rounding up
    tax = (Math.ceil(tax *20 )/20);

    return tax;
  }

  //Calculates item price after tax
  priceAfterTax(item: Item){
    let pt = item.price + this.calculateTax(item);
    item.setPrice(pt);

    return pt;
  }

  //Calculates total price, total tax
  calculateTotal(){
    this.showReceipt = true;

    console.log(this.showReceipt);

    for(let item of this.basket.values()){
      this.totalTax += this.calculateTax(item) * item.amount;
      this.totalPrice += this.priceAfterTax(item) * item.amount;
      console.log(item.name + ": "+ this.totalPrice);
    }
  }

  //reset the basket, total tax, total price
  reset(){
    this.showReceipt = false;
    this.basket.clear();
    this.totalTax = 0;
    this.totalPrice =0;
  }



}
