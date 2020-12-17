import {send} from '../../lib/functions.js';
/* 
    Une classe Hero

    Avec au minimum les proprietes suivants: name, health, hitStrength, lvl, xp, race :
        name: le nom donné au Hero par le joueur
        health: un nombre représentant les points de vie du Hero (ex: 100)
        hitStrength: un nombre représentant les degat de base qu'inflige une attaque (ex: 30)
        lvl: un nombre représentant le niveau du Hero, il augmentera grace a l'xp obtenu lors des combats (ex: 1) et augmentera les degats inflifé aux ennemis
        xp: un nombre représentant l'experience du Hero (ex: 0), sera incrémenté de 2 par combat, quand l'xp atteint 10 elle revient à 0 et augmente le lvl de 1
        race : (humans, elf, dwarf) un string représentant la race du Hero, qui donnera certains avantages en combats
    
    Et les methodes suivantes: getName, setName, getHealth, setHealth, attack, die, getLvl, setLvl, getXp, setXp, getRace, setRace, getHitStrength, setHitStrength
    les races modifient les stats
        Elf : +10% de hitStrength sur les ennemis volants, -10% de hitStrength sur les ennemis au sol
        Humans : +10% de hitStrength sur les ennemis au sol, -10% de hitStrength sur les ennemis volants
        dwarf: 20% de chance de recevoir 50% de degats en moins

    Chaque combat gagné rapporte 2 de xp, quand l'xp atteint 10 le lvl incremente de 1
    Chaque combat gagné, on recupere 10% de l'health de l'ennemi

 */



export default class Hero {

    name = '';
    race = '';
    health = 100;
    level = 1;
    experience = 0; // aj 2 par combat, quand 10 elle revient a 0 et monte 1lvl
    hitStrength = 30;

    constructor(name, race) {
        this.name = name;
        this.race = race;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getHealth() {
        return this.health;
    }

    setHealth(damage) {
        if(this.race != "Dwarf"){
            send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
            return this.health -= damage;
        }
    }

    attack() {
        let damage = this.hitStrength * this.level;
        return damage;
    }

    die() {
        //this.health = 100;
        return send("<b>" + this.name + "</b> died!", "death");
    }

    getLvl() {
        return this.level;
    }

    setLvl() {
        if (this.experience == 10) {
            this.level += 1;
        }
    }

    getXp() {
        return this.experience;
    }

    setXp() {
        if (this.experience == 10) {
            this.experience = 0;
            this.experience += 2;
        } else {
            this.experience += 2;
        }
    }

    getRace() {
        return this.race;
    }

    setRace(race) {
        this.race = race;
    }

    getHitStrength() {
        return this.hitStrength;
    }

    setHitStrength() {
        if (this.race == "Elf") {
            /* this.hitStrength[0]["flying"] += 1 + 10 / 100;
            this.hitStrength[0]["earth"] -= 1 - 10 / 100; */
        }
        if (this.race == "Human") {
            /* this.hitStrength[0]["flying"] -= 1 - 10 / 100;
            this.hitStrength[0]["earth"] += 1 + 10 / 100; */
        }
    }
}
