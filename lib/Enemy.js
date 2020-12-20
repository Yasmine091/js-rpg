
import {send} from '../../lib/functions.js';

export default class Enemy {
  level = 1;
  experience = 0;
  health = 100;
  hitStrength = 30;
 

constructor(name,race) {
  this.name = name;
  this.race = race;

  
}


getRace() {
  return this.race;
}

setRace(race) {
  this.race = race;
}
getName(){return this.name}; 

setName(value){this.name = value};

getHealth(){
  if(this.health<=0){this.die()}
  else{console.log(this.name + " health: " + this.health)}
  return this.health;

};

setHealth(damage){
  if(this.race == "Assassin" ){
    send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
    this.health = this.health - damage
      }
  };

attack(){
  if(this.race == "Berserker" && this.race == "Werewolf" && this.race == "Golem"){
    let damage = this.hitStrength*this.level;
    send(this.name + " attack! Damage: " + damage +"!", "attack");
    return damage;
  }
};

die(){send(this.name + " is dead!", "death")};

getLvl(){ return this.level};

setLvl(value){ this.level = value};

getXp(){ return this.experience};

setXp(){
  this.experience += 2;
if(this.experience += 10){this.level++; this.experience = 0;}
};

getHitStrength(){ return this.hitStrength};

setHitStrength(value){this.hitStrength};
}