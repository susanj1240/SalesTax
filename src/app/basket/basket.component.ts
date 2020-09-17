import { Component, OnInit } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Item } from '../item';
import{BasketService} from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  //where items that user types in is stored
  basket: Map<string,Item>;

  constructor(private basketService: BasketService) {
    this.basket = basketService.basket;
   }

  ngOnInit(): void {
  }

  inputLine: string;

  name: string;
  price: number;
  amount: number;
  imported: boolean;

  //Convert user input into Item and put in basket(Map)
  add(){

    if(this.inputLine.indexOf("at") == -1){
      window.alert("Please check for input format (<amount> <imported?> <product> at <price>)");
      return;
    }

    this.inputLine = this.inputLine.toLowerCase();

    // splitted = [<amount imported? name>, <price>]
    let splitted = this.inputLine.split(" at ");

    this.price = parseFloat(splitted[1]);

    //if the item is imported
    if(splitted[0].indexOf("imported") !== -1){
      let firstHalf = splitted[0].split(" imported ");
      this.amount = parseInt(firstHalf[0]);
      this.imported = true;
      this.name = firstHalf[1];
    }

    //if the item is not imported
    else{
      this.amount = parseInt(splitted[0].substr(0,splitted[0].indexOf(" ") ));
      this.name = splitted[0].substr(splitted[0].indexOf(" ")+1);
      this.imported = false;
    }

    //if the price is not a valid number
    if(typeof this.price !== "number" || isNaN(this.price) || typeof this.amount !== "number" || isNaN(this.amount)){
      window.alert("Please check for input format (<amount> <imported?> <product> at <price>)");
      return;
    }


    this.basketService.addToBasket(this.name, this.price, this.amount, this.imported);

    this.inputLine = "";
  }

}
