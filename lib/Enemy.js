/* Une classe BattleSimulation permettant de :

    Faire combattre le Hero contre chaque ennemi jusqu'à la mort du Hero, et afficher les stats de chaque tour du combat dans un tableaux html.
    Faire combattre les ennemis entre eux et les classer par puissance dans un tableau html.
 */

export default class BattleSimulation {

    constructor(entity1, entity2) {
        this.entity1 = entity1; // heros ou ennemi
        this.entity2 = entity2; // ennemi
    }

    heroStats() {

        return {
            name: this.entity1.getName(),
            health: this.entity1.getHealth(),
            hitStrength: this.entity1.getHitStrength(),
            lvl: this.entity1.getLvl(),
            xp: this.entity1.getXp(),
            race: this.entity1.getRace(),
        };
    }


    enemyStats() {

        return {
            name: this.entity2.getName(),
            health: this.entity2.getHealth(),
            hitStrength: this.entity2.getHealth(),
            lvl: this.entity2.getLvl(),
            xp: this.entity2.getXp(),
            race: this.entity2.getRace(),
        };

    }

    extraEnemyStats() {

        return {
            name: this.entity1.getName(),
            health: this.entity1.getHealth(),
            hitStrength: this.entity1.getHitStrength(),
            lvl: this.entity1.getLvl(),
            xp: this.entity1.getXp(),
            race: this.entity1.getRace(),
        };

    }




    heroHit() {
            let damage = this.entity1.attack();
            console.log(this.entity1.getName() + " attacks!");
            return this.entity2.setHealth(damage);
    }

    enemyHit() {
            let damage = this.entity2.attack();
            console.log(this.entity2.getName() + " attacks!");
            return this.entity1.setHealth(damage);
    }

    extraEnemyHit() {
        let damage = this.entity1.attack();
        console.log(this.entity1.getName() + " attacks!");
        return this.entity2.setHealth(damage);
    }

    

}