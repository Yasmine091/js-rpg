import Enemy from './enemy.js';

export default class Assassin extends Enemy{

    attack(){let damage = this.hitStrength*this.level;
         damage += 0.1*damage;
        console.log(this.name + " attack! Damage: " +damage +"!");
        return damage;
      };
         
}