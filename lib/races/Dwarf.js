import Hero from '../../lib/Hero.js';
import {send} from '../../lib/functions.js';

export default class Dwarf extends Hero {


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