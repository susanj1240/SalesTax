//Item class: Defines properties of an item, some methods to get and set properties
export class Item {
  private _name: string;
  private _price: number;
  private _amount: number;
  private _imported: boolean;

  constructor(name: string, price: number, amount: number, imported: boolean){
    this._name = name;
    this._price = price;
    this._amount = amount;
    this._imported = imported;
  }

  // Getters
  get name(){
    return this._name;
  }

  get price(){
    return this._price;
  }
  get amount(){
    return this._amount;
  }

  get imported(){
    return this._imported;
  }

  // function
  setAmount(x: number){
    this._amount = x;
  }

  setPrice(x: number){
    this._price = x;
  }

}
