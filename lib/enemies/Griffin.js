import Enemy from '../../lib/Enemy.js';
import { send } from '../../lib/functions.js';


/**
 * Classe qui répresente la race Griffin
 * @augments Enemy
 */
export default class Griffin extends Enemy {


  /**
   * Définis la santé de l'ennemi en
   * fonction des dégats reçus
   * @param {number} damage dégats reçus
   */
  setHealth(damage) {
    this.health = this.health - 0.9 * damage;
    send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");

  };


  /**
   * Lance un message comme quoi l'ennemi s'envole
   */
  fly() {
    send("<b>" + this.name + "</b> is flying...");
  }

  /**
  * Quand l'ennemi lance une attaque pendant
  * qu'il vole,la fonction renvoie les dégats provoqués
  * @returns {number} dégats provoqués
  */
  attackFromSky() {
    let power = this.hitStrength * this.level + this.hitStrength * this.level * 0.1;
    send("<b>" + this.name + "</b> attack from sky!", "attack");
    return power;
  }

  /**
  * Quand le l'ennemi lance une attaque, la
  * fonction renvoie les dégats provoqués
  * @returns {number} dégats provoqués
  */
  attack() {
    let damage = this.hitStrength * this.level;
    this.fly();
    let sky = this.attackFromSky();
    return damage + sky;
  }

}