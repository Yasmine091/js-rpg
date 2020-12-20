import Hero from '../../lib/Hero.js';

/**
 * Classe qui répresente la race Elf
 * @augments Hero
 */
export default class Elf extends Hero {

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
     * Définis la puissance d'attaque selon
     * le type d'ennemi (qui vole ou pas)
     * @param {string} type type d'ennemi
     * @returns {number} puissance d'attaque
     */
    setHitStrength(type) {
        if (type == "fly") {
            return this.hitStrength += 1 + 10 / 100;
        }
        if (type == "earth") {
            return this.hitStrength -= 1 - 10 / 100;
        }

    }


}
