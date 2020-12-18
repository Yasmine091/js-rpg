import Hero from '../../lib/Hero.js';

export default class Elf extends Hero {


    setHitStrength(type) {
        if(type == "fly") {
            return this.hitStrength += 1 + 10 / 100;
        }
        if(type == "earth"){
            return this.hitStrength -= 1 - 10 / 100;
        }

    }


}
