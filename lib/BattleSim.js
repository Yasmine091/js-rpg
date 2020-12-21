import Human from '../../lib/races/Human.js'
import Elf from '../../lib/races/Elf.js'
import Dwarf from '../../lib/races/Dwarf.js'
import Dragon from '../../lib/enemies/Dragon.js';
import Golem from '../../lib/enemies/Golem.js';
import Assassin from '../../lib/enemies/Assassin.js';
import Griffin from '../../lib/enemies/Griffin.js';
import Berserker from '../../lib/enemies/Berserker.js';
import Werewolf from '../../lib/enemies/Werewolf.js';
import { send, stats, clearStats, rank } from '../../lib/functions.js';

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Classe qui permet de faire des simulations de combat
 */
export default class BattleSimulation {

    /**
     * Récupere le joueur 1 et le
     * joueur 2 pour faire la simulation
     * @param {object} p1 joueur 1
     * @param {object} p2 joueur 2
     */
    constructor(p1, p2) {
        this.player1 = p1;
        this.player2 = p2;
        this.enemies = [
            new Dragon("Dradra", "Dragon"),
            new Golem("Gogo", "Golem"),
            new Assassin("Sasa", "Assassin"),
            new Griffin("Grigri", "Griffin"),
            new Berserker("Berber", "Berserker"),
            new Werewolf("Wewe", "Werewolf")
        ];
    }

    /**
     * Récupere la puissance d'attaque
     * du joueur 1 en fonction de la
     * race du joueur 2 (s'il vole ou pas)
     * @returns {number} puissance d'attaque
     */
    p1Strength() {

        if (this.player1.race == "Human" || this.player1.race == "Elf") {
            if (this.player2.race == "Dragon" || this.player2.race == "Griffin") {
                return this.player1.setHitStrength("fly");
            }
            else {
                return this.player1.setHitStrength("earth");
            }
        }
        else {
            return this.player1.hitStrength;
        }

    }

    /**
     * Récupere la puissance d'attaque
     * du joueur 2 en fonction de la
     * race du joueur 1 (s'il vole ou pas)
     * @returns {number} puissance d'attaque
     */
    p2Strength() {
        if (this.player2.race == "Human" || this.player2.race == "Elf") {
            if (this.player1.race == "Dragon" || this.player1.race == "Griffin") {
                return this.player1.setHitStrength("fly");
            }
            else {
                return this.player1.setHitStrength("earth");
            }
        }
        else {
            return this.player2.hitStrength;
        }
    }

    /**
     * Affiche les stats du joueur 1
     */
    p1Stats() {

        stats({
            name: this.player1.getName(),
            health: this.player1.getHealth(),
            hitStrength: this.player1.getHitStrength(),
            lvl: this.player1.getLvl(),
            xp: this.player1.getXp(),
            race: this.player1.getRace(),
        }, "p1-Stats");
    }

    /**
     * Affiche les stats du joueur 2
     */
    p2Stats() {

        stats({
            name: this.player2.getName(),
            health: this.player2.getHealth(),
            hitStrength: this.player2.getHitStrength(),
            lvl: this.player2.getLvl(),
            xp: this.player2.getXp(),
            race: this.player2.getRace(),
        }, "p2-Stats");

    }

    /**
     * Ajoute le joueur 1 dans le classement
     */
    p1Rank() {

        rank({
            name: this.player1.getName(),
            health: this.player1.getHealth(),
            hitStrength: this.player1.getHitStrength(),
            lvl: this.player1.getLvl(),
            xp: this.player1.getXp(),
            race: this.player2.getRace(),
        });
    }

    /**
     * Ajoute le joueur 2 dans le classement
     */
    p2Rank() {

        rank({
            name: this.player2.getName(),
            health: this.player2.getHealth(),
            hitStrength: this.player2.getHitStrength(),
            lvl: this.player2.getLvl(),
            xp: this.player2.getXp(),
            race: this.player2.getRace(),
        });

    }

    /**
     * Tour du joueur 1, il lance une
     * attaque et renvoie la santé du
     * joueur 2 après celle-ci
     * @returns {number} santé du joueur 2
     */
    p1Hit() {
        send("<b>" + this.player1.getName() + "</b> attacks!", "attack");
        let damage = this.player1.attack();
        this.player2.setHealth(damage);
        return this.player2.getHealth();
    }

    /**
     * Tour du joueur 2, il lance une
     * attaque et renvoie la santé du
     * joueur 1 après celle-ci
     * @returns {number} santé du joueur 1
     */
    p2Hit() {
        send("<b>" + this.player2.getName() + "</b> attacks!", "attack");
        let damage = this.player2.attack();
        this.player1.setHealth(damage);
        return this.player1.getHealth();
    }

    /**
     * Automatisation d'un combat entre
     * un heros/ennemi vs tout le monde
     * Ceci renvoie la mort d'un des joueurs
     * @returns {boolean} joueur mort
     */
    async HeroVsEnemies() {
        let dead = false;
        let i = 0;

        this.p1Strength();
        this.p2Strength();

        this.p1Stats();
        this.p2Stats();

        this.player2 = this.enemies[i];

        send("<br>");
        send("==========[<b>" + this.player1.getName() + " VS " + this.player2.getName() + "</b>]==========");
        send("<br>");

        while (dead == false) {

            if (this.player1.getHealth() <= 0) {
                await delay(2000);
                this.player1.die();
                send("<b>" + this.player2.getName() + "</b> won the battle!", "win");
                this.player2.setXp();
                this.player2.setLvl();
                clearStats("p1-Stats");
                this.p1Stats();
                let dead = true;
                return dead;
            }
            else {
                await delay(2000);
                this.p1Hit();
                clearStats("p1-Stats");
                this.p1Stats();
            }
            if (this.player2.getHealth() <= 0) {
                await delay(2000);
                this.player2.die();
                i++;
                this.player2 = this.enemies[i];
                this.player2.health = 100;
                this.p1Strength();
                this.p2Strength();
                send("<b>" + this.player1.getName().toUpperCase() + "</b> won the battle!", "win");
                send("<br>");
                send("==========[<b>" + this.player1.getName() + " VS " + this.player2.getName() + "</b>]==========");
                send("<br>");
                this.player1.setXp();
                this.player1.setLvl();
                clearStats("p2-Stats");
                this.p2Stats();
            }
            else {
                await delay(2000);
                this.p2Hit();
                clearStats("p2-Stats");
                this.p2Stats();
            }

        }
    }

    /**
     * Automatisation d'un combat entre un
     * heros/ennemi vs un autre heros/ennemi.
     * Ceci renvoie la mort d'un des joueurs
     * @returns {boolean} joueur mort
     */
    async EnemyVsEnemy() {
        let dead = false;

        this.p1Stats();
        this.p2Stats();
        this.p1Strength();
        this.p2Strength();

        send("<br>");
        send("==========[<b>" + this.player1.getName() + " VS " + this.player2.getName() + "</b>]==========");
        send("<br>");


        while (dead == false) {

            if (this.player1.getHealth() <= 0) {
                await delay(2000);
                this.player1.die();
                send("<b>" + this.player2.getName().toUpperCase() + "</b> won the battle!", "win");
                this.player2.setXp();
                this.player2.setLvl();
                clearStats("p2-Stats");
                this.p2Stats();
                this.p2Rank();
                let dead = true;
                return dead;
            }
            else {
                await delay(2000);
                this.p1Hit();
                clearStats("p1-Stats");
                this.p1Stats();
            }
            if (this.player2.getHealth() <= 0) {
                await delay(2000);
                this.player2.die();
                send("<b>" + this.player1.getName().toUpperCase() + "</b> won the battle!", "win");
                this.player1.setXp();
                this.player1.setLvl();
                clearStats("p1-Stats");
                this.p1Stats();
                this.p1Rank();
                let dead = true;
                return dead;
            }
            else {
                await delay(2000);
                this.p2Hit();
                clearStats("p2-Stats");
                this.p2Stats();
            }

        }

    }
}
