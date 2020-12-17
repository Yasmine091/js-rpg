import Human from './lib/races/Human.js'
import Elf from './lib/races/Elf.js'
import Dwarf from './lib/races/Dwarf.js'
import Hero from './lib/Hero.js';
import BattleSimulation from './lib/BattleSim.js';
import { clearSimulation, clearStats } from '../../lib/functions.js';

/* import Enemy from './lib/Enemy.js';
import Battle from './lib/Battle.js'; */

class Game {
    constructor(name, race, enemy) {
        this.hero = new Hero(name, race);
        this.enemy = enemy;
    }


}

let running = false;

document.addEventListener('submit', () => {
    event.preventDefault();
    let name = document.getElementById('name').value;

    let player1 = new Elf(name, "Elf");
    let player2 = new Dwarf("Machin", "Dwarf");


    let simBattle = new BattleSimulation(player1, player2);



    if (running === false) {

        running = true;
        clearStats("p1-Stats");
        clearStats("p2-Stats");
        clearSimulation();
        //simBattle.HeroVsEnemies();
        simBattle.EnemyVsEnemy();

    }

    //let race = document.getElementById('race').value;

    /* let game = new Game(name, "Elf", "Dragon");
    console.log(game); */
});
