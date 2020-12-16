import Hero from './lib/Hero.js';
import BattleSimulation from './lib/BattleSim.js';
import Enemy from './lib/Enemy.js';
import Battle from './lib/Battle.js';

class Game {
    constructor(name, race, enemy){
        this.hero = new Hero(name, race);
        this.enemy = enemy;
    }

    
}

let hero = new Hero("Kuki", "Elf");
let enemy = new Hero("Yasmine", "Human");
let enemy2 = new Hero("Yasou", "Dwarf");

/* 
enemy.setHitStrength();
console.log(enemy.attack()); */

/*
-> Monter de niveau ou gagner de l'exp :
    console.log(enemy.setLvl());
    console.log(enemy.setXp()); 
*/

let simBattle1 = new BattleSimulation(enemy, enemy2);

console.log(simBattle1.enemyStats());
console.log(simBattle1.extraEnemyStats());

console.log(simBattle1.heroHit());
console.log(simBattle1.heroHit());
console.log(simBattle1.heroHit());
console.log(simBattle1.heroHit());


document.addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    //let race = document.getElementById('race').value;
    
    let game = new Game(name, "Elf", "Dragon");
    console.log(game);
});
