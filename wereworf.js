

import Enemy from './enemy.js';

export default class Wereworf extends Enemy{

    setHealth(damage){
 
                    this.health = this.health -0.5*damage;
            
    }
    
}