import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(size, price, flavor) {
    super('Лимонад', size, price);
    this.flavor = flavor;
  }
  
  _prepare() {
    console.log(`Готовим лимонад со вкусом ${this.flavor}.`);
  }
  
  _getServingTemperature() {
    return 10;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Вкус: ${this.flavor}`);
  }
}