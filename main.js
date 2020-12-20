import Battle from './lib/Battle.js';
import BattleSimulation from './lib/BattleSim.js';

import Human from './lib/races/Human.js'
import Elf from './lib/races/Elf.js'
import Dwarf from './lib/races/Dwarf.js'

import Dragon from '../../lib/enemies/Dragon.js';
import Golem from '../../lib/enemies/Golem.js';
import Assassin from '../../lib/enemies/Assassin.js';
import Griffin from '../../lib/enemies/Griffin.js';
import Berserker from '../../lib/enemies/Berserker.js';
import Werewolf from '../../lib/enemies/Werewolf.js';

import { clearSimulation, clearStats, selectTerminal, enableButtons, disableButtons, enableRBB, disableRBB } from '../../lib/functions.js';


/* import Enemy from './lib/Enemy.js';
import Battle from './lib/Battle.js'; */

disableRBB();

function customRPG(type) {

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

    if(type == "simulation"){
    return new BattleSimulation(player1, player2);
    }
    if(type == "battle"){
    return new Battle(player1, player2);
    }

}

let running = false;

let runSim1 = document.getElementById("start-sim1");
runSim1.addEventListener('click', async function () {

    let stopped = false;

    location.href = "#Game";

    let simBattle = customRPG("simulation");

    while (running === false && stopped === false) {

        running = true;

        if(running === true && stopped === false){
            disableButtons();
            disableRBB();
        }
        
        selectTerminal("simulation");
        clearStats("p1-Stats");
        clearStats("p2-Stats");
        clearSimulation();
        let dead = await simBattle.EnemyVsEnemy();
        if(dead === true){
            running = false;
            stopped = true;
            enableButtons();
        }
    }
    
}
);

let runBattle = document.getElementById("battle");
runBattle.addEventListener('click', async function () {

    let stopped = false;

    location.href = "#Game";

    let realBattle = customRPG("battle");

    while (running === false && stopped === false) {

        running = true;

        if(running === true && stopped === false){
            disableButtons();
            enableRBB();
            document.getElementById('attack').disabled = true;
            document.getElementById('restart').disabled = true;
        }
        
        selectTerminal("battle");
        clearStats("p1-Stats");
        clearStats("p2-Stats");
        clearSimulation();
        
        document.getElementById("start").addEventListener('click', async function()
        {
            let start = await realBattle.gameStarts();
            if(start === true){
                realBattle.p2Attack();
                enableRBB();
                document.getElementById('start').disabled = true;
            }
        });

        document.getElementById("attack").addEventListener('click', async function (){
            let p1Dead = await realBattle.p1Attack();
            let p2Dead = await realBattle.p2Attack();
            if(p1Dead === true || p2Dead === true){
                running = false;
                stopped = true;
                enableButtons();
                document.getElementById('attack').disabled = true;
            }
        });

        document.getElementById("restart").addEventListener('click', function (){
            selectTerminal("battle");
            clearStats("p1-Stats");
            clearStats("p2-Stats");
            clearSimulation();
            realBattle.restart();
            running = true;
            stopped = false;
            disableButtons();
            document.getElementById('start').disabled = true;
            document.getElementById('attack').disabled = false;
        });

        
    }

}
);

let runSim2 = document.getElementById("start-sim2");
runSim2.addEventListener('click', async function () {

    let stopped = false;

    location.href = "#Game";

    let simBattle = customRPG("simulation");

    while (running === false && stopped === false) {

        running = true;

        if(running === true && stopped === false){
            disableButtons();
            disableRBB();
        }

        selectTerminal("simulation");
        clearStats("p1-Stats");
        clearStats("p2-Stats");
        clearSimulation();
        let dead = await simBattle.HeroVsEnemies();
        if(dead === true){
            running = false;
            stopped = true;
            enableButtons();
        }
    }
    
}
);
