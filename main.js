import Enemy from './enemy.js';
import Battle from './battle.js';

let Dragon = new Enemy("Dragon",200);

let Griffin = new Enemy("Griffin",300);

Dragon.fly = function(){
      console.log(this.name + " is flying...");
      
}

Dragon.attackFromSky = function(){
  let power = this.hitStrength*this.level + this.hitStrength*this.level*0.1;
  console.log(this.name + " attack from sky! Damage is : " + power +"!");
  return power;
}

console.log(Griffin);

console.log(Dragon);



Dragon.attack();

Dragon.fly();

Dragon.attackFromSky();

let testBattle = new Battle(Dragon,Griffin);

testBattle.gameStarts();

testBattle.player1Hit();

testBattle.stats();