import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(size, price, typeOfTea) {
    super('Чай', size, price);
    this.typeOfTea = typeOfTea;
  }
  
  _prepare() {
    console.log(`Завариваем чай сорта ${this.typeOfTea}.`);
  }
  
  _getServingTemperature() {
    return 75;
  }
  
  getInfo() {
    super.getInfo();
    console.log(`Сорт чая: ${this.typeOfTea}`);
  }
}