import { Character } from './Character.js';
class Mage extends Character {
  constructor(name, health, strength, mana, magicPower) {
    super(name, health, strength);
    this.mana = mana;
    this.magicPower = magicPower;
  }

  magicAttack() {
    console.log(`${this.name} casts a spell with power of ${this.magicPower} using ${this.mana} mana.`);
  }
}