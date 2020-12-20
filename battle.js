import Enemy from './enemy.js';

export default class Battle {
        /**
     * Récupere le joueur 1 et le
     * joueur 2 pour faire la battle
     * @param {object} p1 joueur 1
     * @param {object} p2 joueur 2
     */

    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
        this.beginsAt = new Date();
        
    }
   
     /**
     * annoncer que le jeu commence
     */
    gameStarts(){
        console.log("Game begins at : " + this.beginsAt +"." + this.p1.getName() + " and " + this.p2.getName() + " are ready,let's go!")
    }

         /**
     * annoncer que le jeu recommence
     * jouer 1 health reset
     */
    restart(){
        
        this.p1.health = 1000;
        this.gameStarts();
    }

       /**
     * jouer lance une
     * attaque et renvoie la santé du
     * joueur 2 après celle-ci
     * @returns {number} santé du joueur 2
     */

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




 /**
     * Affiche les stats du jeu
     */

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

 /**
     * Affiche les stats du jeu
     *  @returns {boolean} si jeu est fini
     */
        gameOver(){
            
                this.stats();
                console.log("Game Over :(");
            return true;}
              
            
        

}
