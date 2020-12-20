import Enemy from '../../lib/Enemy.js';
import { send } from '../../lib/functions.js';

/**
 * Classe qui répresente la race Golem
 * @augments Enemy
 */
export default class Golem extends Enemy {

        /**
        * Définis la santé de l'ennemi en
        * fonction des dégats reçus
        * @param {number} damage dégats reçus
        */
        setHealth(damage) {
                if (Math.random() < 0.5) {
                        send("<b>" + this.name + "</b> got lucky and received no damage!", "hurt"); // 50% chance to cancel damage
                }
                else {
                        this.health = this.health - damage;
                        send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
                }
        }

}