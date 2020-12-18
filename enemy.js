export default class Enemy {
      level = 1;
      experience = 0;
      health = 1000;
      hitStrength = 100;
     

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
        this.health = this.health - damage
          }
      };
    
    attack(){
      
      if(this.race !== "Dragon" && this.race !== "Griffin" && this.race !=="Assassin"){
        let damage = this.hitStrength*this.level;
        console.log(this.name + " attack! Damage: " +damage +"!");
        return damage;
      }
     
  };
    
    die(){console.log(this.name + " is dead!")};
    
    getLvl(){ return this.level};
    
    setLvl(value){ this.level = value};
    
    getXp(){ return this.experience};
    
    setXp(){  this.experience += 2;
    if(this.experience = 10){this.level++; this.experience = 0;}
  };
    
    getHitStrength(){ return this.hitStrength};
    
    setHitStrength(value){ this.hitStrength = value};
  }

  