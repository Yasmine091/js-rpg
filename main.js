import Enemy from './enemy.js';
import Battle from './battle.js';

import Dragon from './dragon.js';
import Golem from './golem.js';
import Berserker from './berserker.js';
import Assassin from './assassin.js';
import Griffin from './griffin.js';
import Wereworf from './wereworf.js';

let Dradra = new Dragon("Dradra","Dragon");

let Grigri = new Griffin("Grigri","Griffin");

let Gogo = new Golem("Gogo","Golem");

let Berber = new Berserker("Berber","Berseker");

let Sasa = new Assassin("Sasa","Assassin");

let Wewe = new Wereworf("Wewe","Wereworf");

console.log(Dradra);
console.log(Grigri);

console.log(Gogo);

console.log(Berber);
console.log(Sasa);
console.log(Wewe);

//Dragon.attack();

//Dragon.fly();

//Dragon.attackFromSky();

//let testBattle = new Battle(Dradra,Gogo);
let testBattle = new Battle(Sasa,Wewe);


testBattle.gameStarts();

testBattle.p1Attack();

testBattle.p1Attack();


testBattle.p1Attack();
testBattle.p1Attack();
testBattle.p1Attack();
testBattle.p1Attack();
testBattle.p1Attack();
testBattle.p1Attack();
