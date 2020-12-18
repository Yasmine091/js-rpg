import Human from './lib/races/Human.js'
import Elf from './lib/races/Elf.js'
import Dwarf from './lib/races/Dwarf.js'
import Dragon from './lib/enemies/Dragon.js';
import Hero from './lib/Hero.js';
import Enemy from './lib/Enemy.js';
import BattleSimulation from './lib/BattleSim.js';
import { clearSimulation, clearStats } from '../../lib/functions.js';

/* import Enemy from './lib/Enemy.js';
import Battle from './lib/Battle.js'; */

let running = false;

document.addEventListener('submit', function() {

    location.href = "#Game";

    let race1 = document.getElementById("player-1").selectedIndex;
    let race2 = document.getElementById("player-2").selectedIndex;

    let name1 = document.getElementById('p1-name').value;
    let name2 = document.getElementById('p2-name').value;


    let player1;
    let player2;

    switch (race1) {
        case 1:
            player1 = new Human(name1, "Human");
            break;
        case 2:
            player1 = new Dwarf(name1, "Dwarf");
            break;
        case 3:
            player1 = new Elf(name1, "Elf");
            break;
        case 4:
            player1 = new Dragon(name1, "Dragon");
            break;
        case 5:
            player1 = new Golem(name1, "Golem");
            break;
        case 6:
            player1 = new Assassin(name1, "Assassin");
            break;
        case 7:
            player1 = new Griffin(name1, "Griffin");
            break;
        case 8:
            player1 = new Berserker(name1, "Berserker");
            break;
        case 9:
            player1 = new Werewolf(name1, "Werewolf");
            break;
    }

    switch (race2) {
        case 1:
            player2 = new Human(name2, "Human");
            break;
        case 2:
            player2 = new Dwarf(name2, "Dwarf");
            break;
        case 3:
            player2 = new Elf(name2, "Elf");
            break;
        case 4:
            player2 = new Dragon(name2, "Dragon");
            break;
        case 5:
            player2 = new Golem(name2, "Golem");
            break;
        case 6:
            player2 = new Assassin(name2, "Assassin");
            break;
        case 7:
            player2 = new Griffin(name2, "Griffin");
            break;
        case 8:
            player2 = new Berserker(name2, "Berserker");
            break;
        case 9:
            player2 = new Werewolf(name2, "Werewolf");
            break;
    }

    let simBattle = new BattleSimulation(player1, player2);

    if (running === false) {

        running = true;
        clearStats("p1-Stats");
        clearStats("p2-Stats");
        clearSimulation();
        //simBattle.HeroVsEnemies();
        simBattle.EnemyVsEnemy();

    }

}
);
