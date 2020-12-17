import Enemy from './enemy.js';

export default class Griffin extends Enemy{



      setHealth(damage){this.health = this.health - 0.9*damage};

    

      fly(){
        console.log(this.name + " is flying...");      
     }


      attackFromSky(){
        let power = this.hitStrength*this.level + this.hitStrength*this.level*0.1;
        console.log(this.name + " attack from sky! Damage: " + power +"!");
        return power;
      }

        attack(){
        let damage = this.hitStrength*this.level;
        console.log(this.name + " attack! Damage: " +damage +"!");
        this.fly();
        this.attackFromSky();
        return damage+this.attackFromSky();
    }

}