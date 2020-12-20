import { send } from '../../lib/functions.js';

/** Classe qui répresente un Héros */
export default class Hero {
    name = '';
    race = '';
    health = 500;
    level = 1;
    experience = 0;
    hitStrength = 30;

    /**
     * Crée un héros avec le prénom et la
     * race proposées par l'utilisateur
     * @param {string} name prenom du héros
     * @param {string} race race du héros
     */
    constructor(name, race) {
        this.name = name;
        this.race = race;
    }

    /**
     * Renvoie le prénom du héros
     * @returns {string} prénom du héros
     */
    getName() {
        return this.name;
    }

    /**
     * Définis le prénom du héros
     * @param {string} name prénom du héros
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Renvoie la santé du héros
     * @returns {number} santé du héros
     */
    getHealth() {
        return this.health;
    }

    /**
     * Définis la santé du héros en
     * fonction des dégats reçus
     * @param {number} damage dégats reçus
     */
    setHealth(damage) {
        if (this.race != "Dwarf") {
            send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
            this.health -= damage;
        }
    }

    /**
     * Quand le héros lance une attaque, la
     * fonction renvoie les dégats provoqués
     * @returns {number} dégats provoqués
     */
    attack() {
        let damage = this.hitStrength * this.level;
        return damage;
    }

    /**
     * Quand le héros meurt, la fonction
     * renvoie une fonction qui lance un
     * message de décés dans le HTML
     * @returns {typedef} fonction avec le message de déces
     */
    die() {
        return send("<b>" + this.name + "</b> died!", "death");
    }

    /**
     * Renvoie le niveau du héros
     * @returns {number} niveau du héros
     */
    getLvl() {
        return this.level;
    }

    /**
     * Monte le niveau du héros
     * s'il atteint 10 de xp
     */
    setLvl() {
        if (this.experience == 10) {
            this.level += 1;
        }
    }

    /**
     * Renvoie l'experience du héros
     * @return {number} experience du héros
     */
    getXp() {
        return this.experience;
    }

    /**
     * Ajoute de l'experience au héros,
     * ou se reinitialise quand il atteint 10
     */
    setXp() {
        if (this.experience == 10) {
            this.experience = 0;
            this.experience += 2;
        } else {
            this.experience += 2;
        }
    }

    /**
     * Renvoie la race du héros
     */
    getRace() {
        return this.race;
    }

    /**
     * Définis la race du héros
     * @param {string} race race du héros
     */
    setRace(race) {
        this.race = race;
    }

    /**
     * Renvoie la puissance
     * de l'attaque du héros
     * @returns {number} puissance d'attaque
     */
    getHitStrength() {
        return this.hitStrength;
    }

    /**
     * Définis la puissance
     * de l'attaque du héros
     * @returns {number} puissance d'attaque
     */
    setHitStrength() {
        if (this.race == "Dwarf") {
            return this.hitStrength;
        }
    }
}
