import Enemy from './enemy.js';

export default class Battle {
    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
        this.beginsAt = new Date();
        
    }
   
    
    gameStarts(){
        console.log("Game begins at : " + this.beginsAt +"." + this.p1.getName() + " and " + this.p2.getName() + " are ready,let's go!")
    }

    p1Attack(){
        if(this.p2.health>0){
            let damage = this.p1.attack();
            this.p2.setHealth(damage);
            this.p2.getHealth();
        }
        if(this.p2.health<=0){
            this.gameOver();
        }
    }

    p2Attack(){
        if(this.p1.health>0){
        let damage = this.p2.attack();
        this.p1.setHealth(damage);
        this.p1.getHealth();}

    if(this.p1.health<=0){
        this.gameOver();}
    }



    stats(){

        let winner = "";
    

        if(this.p1.health <= 0){
            this.p1.die();
            winner = this.p2.name;
            this.p2.setXp();}

        else if(this.p2.health <= 0){
            this.p2.die();
            winner = this.p1.name;
            this.p1.setXp();}

        let result = {player1_name:this.p1.name,
            player2_name:this.p2.name,
            player1_xp:this.p1.experience,
            player2_xp:this.p2.experience,
            player1_level:this.p1.level,
            player2_level:this.p2.level,
            player1_health:this.p1.health,
            player2_health:this.p2.health,
            result:"the winner is : " + winner,

         };

         console.log(result);
        }


        gameOver(){
            if(this.p1.health <= 0 || this.p2.health <= 0 ){
                this.stats();
                console.log("Game Over :(")}
        }

}
