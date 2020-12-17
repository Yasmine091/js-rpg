import Enemy from './enemy.js';
import Battle from './battle.js';

import Dragon from './dragon.js';
import Golem from './golem.js';
import Berserker from './berserker.js';
import Assassin from './assassin.js';
import Griffin from './griffin.js';
import Wereworf from './wereworf.js';

let Dradra = new Dragon("Dradra",100);

let Grigri = new Griffin("Grigri",300);

let Gogo = new Golem("Gogo",800);

let Berber = new Berserker("Berber",600);

let Sasa = new Assassin("Sasa",200);

let Wewe = new Wereworf("Wewe",200);

console.log(Dradra);
console.log(Grigri);

console.log(Gogo);

console.log(Berber);
console.log(Sasa);
console.log(Wewe);

//Dragon.attack();

//Dragon.fly();

//Dragon.attackFromSky();

let testBattle = new Battle(Dradra,Gogo);

testBattle.gameStarts();

testBattle.p1Attack();

testBattle.p1Attack();


testBattle.p1Attack();
testBattle.p1Attack();
testBattle.p1Attack();
