import { Character } from './Character.js';
class Warrior extends Character {
  constructor(name, health, strength, armor, damage) {
    super(name, health, strength);
    this.armor = armor;
    this.damage = damage;
  }

  attack() {
    console.log(`${this.name} attacks with damage of ${this.damage} and armor of ${this.armor}.`);
  }
}