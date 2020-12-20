import Enemy from '../../lib/Enemy.js';
import { send } from '../../lib/functions.js';

/**
 * Classe qui répresente la race Assassin
 * @augments Enemy
 */
export default class Assassin extends Enemy {

  /**
  * Quand le l'ennemi lance une attaque, la
  * fonction renvoie les dégats provoqués
  * @returns {number} dégats provoqués
  */
  attack() {
    let damage = this.hitStrength * this.level;
    damage += 0.1 * damage;
    return damage;
  };

}