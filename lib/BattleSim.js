import Human from '../../lib/races/Human.js'

/* Une classe BattleSimulation permettant de :

    Faire combattre le Hero contre chaque ennemi jusqu'à la mort du Hero, et afficher les stats de chaque tour du combat dans un tableaux html.
    Faire combattre les ennemis entre eux et les classer par puissance dans un tableau html.
 */

export default class BattleSimulation {

    constructor(player1, player2) {
        this.player1 = player1; // heros ou ennemi
        this.player2 = player2; // ennemi
        this.enemies = [
            new Human("Dragon", "Human"),
            new Human("Griffin", "Human"),
            new Human("Chepa", "Human"),
            new Human("Truc2", "Human")
    ];
    }

    p1Stats() {

        return {
            name: this.player1.getName(),
            health: this.player1.getHealth(),
            hitStrength: this.player1.getHitStrength(),
            lvl: this.player1.getLvl(),
            xp: this.player1.getXp(),
            race: this.player1.getRace(),
        };
    }


    p2Stats() {

        return {
            name: this.player2.getName(),
            health: this.player2.getHealth(),
            hitStrength: this.player2.getHealth(),
            lvl: this.player2.getLvl(),
            xp: this.player2.getXp(),
            race: this.player2.getRace(),
        };

    }

    p1Hit() {
        let damage = this.player1.attack();
        console.log(this.player1.getName() + " attacks!");
        return this.player2.setHealth(damage);
    }

    p2Hit() {
        let damage = this.player2.attack();
        console.log(this.player2.getName() + " attacks!");
        return this.player1.setHealth(damage);
    }


    HeroVsEnemies() {
        let dead = false;
        let i = 0;

        this.player2 = this.enemies[i];
        this.player1.health = 1000;

        while (dead == false) {

            if (this.player1.getHealth() <= 0) {
                this.player1.die();
                console.log(this.player2.getName().toUpperCase() + " IS THE WINNER!");
                let dead = true;
                return dead;
            }
            else {
                this.p1Hit();
                this.player1.getHealth()
            }
            if (this.player2.getHealth() <= 0) {
                this.player2.die();
                console.log(this.player1.getName().toUpperCase() + " IS THE WINNER!");
                while(i < 3){
                    this.player2 = this.enemies[i];
                    this.player2.health = 100;
                    i++;
                }
            }
            else {
                this.p2Hit();
                this.player2.getHealth();
            }

        }
    }

    EnemyVsEnemy() {
        let dead = false;

        while (dead == false) {

            if (this.player1.getHealth() <= 0) {
                this.player1.die();
                console.log(this.player2.getName().toUpperCase() + " IS THE WINNER!");
                let dead = true;
                return dead;
            }
            else {
                this.p1Hit();
                this.player1.getHealth();
            }
            if (this.player2.getHealth() <= 0) {
                this.player2.die();
                console.log(this.player1.getName().toUpperCase() + " IS THE WINNER!");
                let dead = true;
                return dead;
            }
            else {
                this.p2Hit();
                this.player2.getHealth();
            }

        }
    }



}