import Hero from '../../lib/Hero.js';

export default class Dwarf extends Hero {

    constructor(name, race, health, level, experience, hitStrength) {
        super(name, race, health, level, experience, hitStrength);
    }

    setHealth(damage) {
        let probability = Math.floor(Math.random() * 100);

        if (probability <= 20) {
            console.log("Damage received : " + damage / 2);
            return this.health -= damage / 2;
        }
        else {
            console.log("Damage received : " + damage);
            return this.health -= damage;
        }
    }
}