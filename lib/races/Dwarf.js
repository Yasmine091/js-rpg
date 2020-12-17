import Hero from '../../lib/Hero.js';
import {send} from '../../lib/functions.js';

export default class Dwarf extends Hero {

    constructor(name, race, health, level, experience, hitStrength) {
        super(name, race, health, level, experience, hitStrength);
    }

    setHealth(damage) {
        let probability = Math.floor(Math.random() * 100);

        if (probability <= 20) {
            send("<b>" + this.name + "</b> received " + damage / 2 + " of damage", "hurt");
            return this.health -= damage / 2;
        }
        else {
            send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
            return this.health -= damage;
        }
    }
}