import Hero from '../../lib/Hero.js';
import { send } from '../../lib/functions.js';

/**
 * Classe qui répresente la race Dwarf
 * @augments Hero
 */
export default class Dwarf extends Hero {

    /**
     * Crée un héros avec le prénom et la
     * race proposées par l'utilisateur
     * @param {string} name prenom du héros
     * @param {string} race race du héros
     */
    constructor(name, race) {
        super(name, race);
    }

    /**
     * Définis la santé du héros selon
     * avec une probabilité de 20% de
     * reçevoir la moitié des dégats
     * @param {number} damage dégats réçus
     */
    setHealth(damage) {
        let probability = Math.floor(Math.random() * 100);

        if (probability <= 20) {
            send("<b>" + this.name + "</b> received " + damage / 2 + " of damage", "hurt");
            this.health -= damage / 2;
        }
        else {
            send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
            this.health -= damage;
        }
    }
}