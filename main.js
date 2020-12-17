import Human from './lib/races/Human.js'
import Elf from './lib/races/Elf.js'
import Dwarf from './lib/races/Dwarf.js'
import Hero from './lib/Hero.js';
import BattleSimulation from './lib/BattleSim.js';
/* import Enemy from './lib/Enemy.js';
import Battle from './lib/Battle.js'; */

class Game {
    constructor(name, race, enemy){
        this.hero = new Hero(name, race);
        this.enemy = enemy;
    }

    
}

let hero = new Elf("Kuki", "Elf");
let enemy = new Human("Yasmine", "Human");
let enemy2 = new Dwarf("Yasou", "Dwarf");

/* 
enemy.setHitStrength();
console.log(enemy.attack()); */

/*
-> Monter de niveau ou gagner de l'exp :
    console.log(enemy.setLvl());
    console.log(enemy.setXp()); 
*/

let simBattle1 = new BattleSimulation(hero, enemy2);

console.log(simBattle1.p1Stats());
console.log(simBattle1.p2Stats());

//console.log(simBattle1.p1Hit());
//console.log(simBattle1.p2Hit());

console.log(simBattle1.HeroVsEnemies());
//console.log(simBattle1.EnemyVsEnemy());

console.log(simBattle1.p1Stats());
console.log(simBattle1.p2Stats());


document.addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    //let race = document.getElementById('race').value;
    
    let game = new Game(name, "Elf", "Dragon");
    console.log(game);
});