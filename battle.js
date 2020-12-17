import Enemy from './enemy.js';

export default class Battle {
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
        this.beginsAt = new Date();
        
    }
   
    
    gameStarts(){
        console.log(this.player1.getName() + " and " + this.player2.getName() + " are ready,let's go!")
    }

    player1Hit(){
        let damage = this.player1.attack();
        this.player2.setHealth(damage);
        this.player2.getHealth();
    }

    player2Hit(){
        let damage = this.player2.attack();
        this.player2.setHealth(damage);
        this.player1.getHealth();
    }

    stats(){
        console.log(this.player1.getHealth(),this.player2.getHealth()) 
        

    }
}