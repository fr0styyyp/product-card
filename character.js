class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  choose() {
    console.log(`You have chosen ${this.name} with ${this.health} health and ${this.strength} strength.`);
  }
}

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