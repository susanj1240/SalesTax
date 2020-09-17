import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //items in the store
  private food = ["apple","chocolate bar","pizza","battery"]
  private medical = ["headache pill"]
  private book = ["book"]
  private etc=["music cd", "perfume"]

  constructor() { }

  //check if the item is exempt from sales tax
  exemptFromSaleTax(name: string){
    return this.food.some(s => s === name) || this.medical.some(s => s === name) || this.book.some(s => s === name);
  }

  //check if item exists in store
  itemExist(name: string){
    return this.food.some(s => s === name) || this.medical.some(s => s === name) || this.book.some(s => s === name) || this.etc.some(s => s === name);
  }

  //return complete list of items
  get completeList(){
    return [...this.book, ...this.food, ...this.medical, ...this.etc];
  }
}
