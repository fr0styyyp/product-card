import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(size, price, typeOfMilk, typeOfBeans){
    super('Кофе', size, price);
    this.typeOfMilk = typeOfMilk;
    this.typeOfBeans = typeOfBeans;
  }
  
  _prepare() {
    console.log(`Готовим кофе из ${this.typeOfBeans} с ${this.typeOfMilk} молоком.`);
  }
  
  _getServingTemperature() {
    return 65;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Тип молока: ${this.typeOfMilk}, Тип зерен: ${this.typeOfBeans}`);
  }
}