class Enemy {
    
    constructor(x) {
      this.name = x;
      this.health = 100;
      this.hitStrength = 0;
      this.level = 1;
      this.experience = 0;
    }

    getName(){return this.name}; 
    
    setName(value){this.name = value};
    
    getHealth(){return this.health};
    
    setHealth(value){this.health = value};
    
    attack(){};
    
    die(){};
    
    getLvl(){ return this.level};
    
    setLvl(value){ this.level = value};
    
    getXp(){ return this.experience};
    
    setXp(value){  this.experience = value}
    
    getHitStrength(){ return this.hitStrength};
    
    setHitStrength(value){ this.hitStrength = value};
  }

  
  