export default class Enemy {
   
    constructor(name,hitStrength) {
      this.name = name;
      this.level = 1;
      this.experience = 0;
      this.health = 1000;
      this.hitStrength = hitStrength;
    }

    getName(){return this.name}; 
    
    setName(value){this.name = value};
    
    getHealth(){console.log(this.name + " health is now: " + this.health)};
    
    setHealth(damage){this.health = this.health - damage};
    
    attack(){let damage = this.hitStrength*this.level;
    console.log(this.name + " attack! Damage is : " +damage +"!");
    return damage;
  };
    
    die(){};
    
    getLvl(){ return this.level};
    
    setLvl(value){ this.level = value};
    
    getXp(){ return this.experience};
    
    setXp(value){  this.experience = value}
    
    getHitStrength(){ return this.hitStrength};
    
    setHitStrength(value){ this.hitStrength = value};
  }

  