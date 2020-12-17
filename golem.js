import Enemy from './enemy.js';

export default class Golem extends Enemy{

    setHealth(damage){
       
        
            if(Math.random() < 0.5){            

                    console.log(this.name+ " got lucky! damage canceled!"); // 50% chance to cancel damage
                } 

            else {
                    this.health = this.health - damage;
            } 
    }
         
}