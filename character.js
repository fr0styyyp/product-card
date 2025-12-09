 export class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  choose() {
    console.log(`You have chosen ${this.name} with ${this.health} health and ${this.strength} strength.`);
  }
}