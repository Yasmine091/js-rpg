import { send } from '../../lib/functions.js';

/** Classe qui répresente un Ennemi */
export default class Enemy {
      level = 1;
      experience = 0;
      health = 500;
      hitStrength = 30;
      name = '';
      race = '';

   /**
     * Crée un ennemi avec le prénom et la
     * race proposées par l'utilisateur
     * @param {string} name prenom du ennemi
     * @param {string} race race du ennemi
     */

    constructor(name,race) {
      this.name = name;
     
      this.race = race;

      
    }





    /**
     * Renvoie le prénom du ennemi
     * @returns {string} prénom du ennemi
     */
    getName(){return this.name}; 

       /**
     * Définis le prénom du ennemi
     * @param {string} name prénom du ennemi
     */
    setName(value){this.name = value};
    
        /**
     * Renvoie la santé du ennemi
     * @returns {number} santé du ennemi
     */
    getHealth(){
      if(this.health<=0){this.die()}
      return this.health;

    };
    
        /**
     * Définis la santé du ennemi en
     * fonction des dégats reçus
     * @param {number} damage dégats reçus
     */
      setHealth(damage) {
        if (this.race == "Assassin") {
            send("<b>" + this.name + "</b> received " + damage + " of damage", "hurt");
            this.health -= damage;
        }
    }
    

          /**
     *  
     * fonction renvoie les dégats provoqués
     * @returns {number} dégats provoqués
     */
    attack(){
      if(this.race !== "Dragon" && this.race !== "Griffin" && this.race !=="Assassin"){
        let damage = this.hitStrength*this.level;
        return damage;
      }
     
  };
    
     /**
     * la fonction
     * renvoie une fonction qui lance un
     * message de décés dans le HTML
     * @returns {typedef} fonction avec le message de déces
     */
    die(){send("<b>" + this.name + "</b> is dead!")};
    

        /**
     * 
     * @returns {number} niveau du ennemi
     */
    getLvl(){ return this.level};
    
        /**
     * Monte le niveau du ennemi
     * s'il atteint 10 de xp
     */
    setLvl(){    if (this.experience == 10) {
      this.level += 1;
  }
};
       /**
     * Renvoie l'experience du ennemi
     * @return {number} experience du ennemi
     */
    getXp(){ return this.experience};

        /**
     * Ajoute de l'experience au ennemi,
     * ou se reinitialise quand il atteint 10
     */
    setXp(){        if (this.experience == 10) {
            this.experience = 0;
            this.experience += 2;
        } else {
            this.experience += 2;
        }

  };
    


      /**
     * Renvoie la race du ennemi
     */
    getRace() {
      return this.race;
  }

  /**
   * Définis la race du ennemi
   * @param {string} race race du ennemi
   */
  setRace(race) {
      this.race = race;
  }

   /**
     * Renvoie la puissance
     * de l'attaque du ennemi
     * @returns {number} puissance d'attaque
     */

    getHitStrength(){ return this.hitStrength};


     /**
     * Définis la puissance
     * de l'attaque du ennemi
     * @returns {number} puissance d'attaque
     */
    setHitStrength(value){ this.hitStrength = value};
  }

  