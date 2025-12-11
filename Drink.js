export class Drink {
  #temperature;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error("Нельзя создавать экземпляр абстрактного класса Drink");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = null;
  }

  present() {
    console.log(`Напиток ${this.name}, объем: ${this.size} мл, цена: ${this.price} руб.`);
  }

  getTemperature() {
    return this.#temperature;
  }

  getInfo() {
    console.log(
      `Напиток: ${this.name}, Объем: ${this.size} мл, Цена: ${this.price} руб., Температура подачи: ${this.#temperature}°C`
    );
  }

  _prepare() {
    throw new Error("_prepare() должен быть реализован в наследнике");
  }

  _getServingTemperature() {
    throw new Error("_getServingTemperature() должен быть реализован в наследнике");
  }

  #setTemperature(value) {
    this.#temperature = value;
  }

  make() {
    this._prepare();
    this.#setTemperature(this._getServingTemperature());
  }
}
