import { Character } from './Character.js';
class Archer extends Character {
  constructor(name, health, strength, rangedAttack, accuracy) {
    super(name, health, strength);
    this.rangedAttack = rangedAttack;
    this.accuracy = accuracy;
  }

  archerAttack() {
    console.log(`${this.name} performs a ranged attack with power of ${this.rangedAttack} and accuracy of ${this.accuracy}.`);
  }
}