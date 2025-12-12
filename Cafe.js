export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  
  getDetails() {
    console.log(`Кафе "${this.name}" находится по адресу: ${this.location}.`);
  }
  
  orderDrink(drink) {
    console.log(`Заказ: ${drink.name}`);
    
    drink.present();
    drink.make();
    drink.getInfo();
  }
}
