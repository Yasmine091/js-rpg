import Enemy from '../../lib/Enemy.js';

/**
 * Classe qui répresente la race Berserker
 * @augments Enemy
 */
export default class Berserker extends Enemy{

    /**
    * Définis la santé de l'ennemi en
    * fonction des dégats reçus
    * @param {number} damage dégats reçus
    */
    setHealth(damage){
 
                    this.health = this.health -0.7*damage;
            
    }
         
}