import Enemy from '../Enemy.js';

/**
 * Classe qui répresente la race Werewolf
 * @augments Enemy
 */
export default class Wereworf extends Enemy {

    /**
   * Définis la santé de l'ennemi en
   * fonction des dégats reçus
   * @param {number} damage dégats reçus
   */
    setHealth(damage) {

        this.health = this.health - 0.5 * damage;
        send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");


    }

}