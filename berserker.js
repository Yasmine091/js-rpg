import Enemy from './enemy.js';

export default class Berserker extends Enemy{

    setHealth(damage){
 
                    this.health = this.health -0.7*damage;
            
    }
         
}