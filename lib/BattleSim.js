import Human from '../../lib/races/Human.js'
import Elf from '../../lib/races/Elf.js'
import Dwarf from '../../lib/races/Dwarf.js'
import Dragon from '../../lib/enemies/Dragon.js';
import { send, stats, clearStats, rank } from '../../lib/functions.js';

const delay = ms => new Promise(res => setTimeout(res, ms))

/* Une classe BattleSimulation permettant de :

    Faire combattre le Hero contre chaque ennemi jusqu'à la mort du Hero, et afficher les stats de chaque tour du combat dans un tableaux html.
    Faire combattre les ennemis entre eux et les classer par puissance dans un tableau html.
 */

export default class BattleSimulation {

    constructor(p1, p2) {
        this.player1 = p1; // heros ou ennemi
        this.player2 = p2; // ennemi
        this.enemies = [
            new Elf("Elf", "Elf"),
            new Human("Human", "Human")
        ];
    }

    p1Strength() {

        if(this.player1.race == "Human" || this.player1.race == "Elf"){
        if(this.player2.race == "Dragon" || this.player2.race == "Griffin"){
            return this.player1.setHitStrength("fly");
        }
        else{
            return this.player1.setHitStrength("earth");
        }
    }
    else{
        return this.player1.hitStrength;
    }

    }

    p2Strength() {
        if(this.player2.race == "Human" || this.player2.race == "Elf"){
        if(this.player1.race == "Dragon" || this.player1.race == "Griffin"){
            return this.player1.setHitStrength("fly");
        }
        else{
            return this.player1.setHitStrength("earth");
        }
    }
    else{
        return this.player2.hitStrength;
    }
    }



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

    p1Rank() {

        rank({
            name: this.player1.getName(),
            health: this.player1.getHealth(),
            hitStrength: this.player1.getHitStrength(),
            lvl: this.player1.getLvl(),
            xp: this.player1.getXp(),
            race: this.player2.getRace(),
        },);
    }


    p2Rank() {

        rank({
            name: this.player2.getName(),
            health: this.player2.getHealth(),
            hitStrength: this.player2.getHitStrength(),
            lvl: this.player2.getLvl(),
            xp: this.player2.getXp(),
            race: this.player2.getRace(),
        },);

    }

    p1Hit() {
        let damage = this.player1.attack();
        send("<b>" + this.player1.getName() + "</b> attacks!", "attack");
        this.player2.setHealth(damage);
        return this.player2.getHealth();
    }

    p2Hit() {
        let damage = this.player2.attack();
        send("<b>" + this.player2.getName() + "</b> attacks!", "attack");
        this.player1.setHealth(damage);
        return this.player1.getHealth();
    }


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

    async EnemyVsEnemy() {
        let dead = false;

        this.p1Stats();
        this.p2Stats();

        send("<br>");
        send("==========[<b>" + this.player1.getName() + " VS " + this.player2.getName() + "</b>]==========");
        send("<br>");


        while (dead == false) {

            if (this.player1.getHealth() <= 0) {
                await delay(2000);
                this.player1.die();
                send("<b>" + this.player2.getName().toUpperCase() + "</b> won the battle!", "win");
                this.player2.setXp();
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
