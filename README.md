# JS-RPG

Le jeu comportera ces éléments:
Une classe Hero

    avec au minimum les proprietes suivants: name, health, hitStrength, lvl, xp, race
        name: le nom donné au Hero par le joueur
        health: un nombre représentant les points de vie du Hero (ex: 100)
        hitStrength: un nombre représentant les degat de base qu'inflige une attaque (ex: 30)
        lvl: un nombre représentant le niveau du Hero, il augmentera grace a l'xp obtenu lors des combats (ex: 1) et augmentera les degats inflifé aux ennemis
        xp: un nombre représentant l'experience du Hero (ex: 0), sera incrémenté de 2 par combat, quand l'xp atteint 10 elle revient à 0 et augmente le lvl de 1
        race : (humans, elf, dwarf) un string représentant la race du Hero, qui donnera certains avantages en combats
    et les methodes suivantes: getName, setName, getHealth, setHealth, attack, die, getLvl, setLvl, getXp, setXp, getRace, setRace, getHitStrength, setHitStrength
    les races modifient les stats
        Elf : +10% de hitStrength sur les ennemis volants, -10% de hitStrength sur les ennemis au sol
        Humans : +10% de hitStrength sur les ennemis au sol, -10% de hitStrength sur les ennemis volants
        dwarf: 20% de chance de recevoir 50% de degats en moins
    chaque combat gagné rapporte 2 de xp, quand l'xp atteint 10 le lvl incremente de 1
    chaque combat gagné, on recupere 10% de l'health de l'ennemi

Des classes pour les ennemis: Dragon, Golem, Assassin, Griffin, Berserker, Werewolf

    chaque classe d'ennemi devra heriter d'une classe Enemy
    chaque ennemi devra avoir les propriete suivantes: name, health, hitStrength, lvl, xp
    et les methodes suivantes: getName, setName, getHealth, setHealth, attack, die, getLvl, setLvl, getXp, setXp, getHitStrength, setHitStrength
    Le Dragon et le Griffin ont une methode fly et attackFromSky supplementaires qui augmentent de 10% la resistance et 10% l'attaque. Leur attaques devront suivre la logique suivante
        attaque au sol
        fly
        attackFromSky
    Le Dragon et le Wereworf ont une resistance de 50% supplementaire
    L'Assassin inflige 10% de degat supplementaire à chaque nouvelle attaque
    Le berserker a un bonus de resistance de 30%
    Le Golem a 50% de chance d'annuler les degats recus

Une class Battle permettant à un Hero de combattre un ennemi

    Implementation libre, nous faire une proposition

Une classe BattleSimulation permettant de :

    faire combattre le Hero contre chaque ennemi jusqu'à la mort du Hero et afficher les stats de chaque tour du combat dans un tableaux html.
    faire combattre les ennemis entre eux et les classer par puissance dans un tableau html.

Exemple d'un combat:

Humans vs Werewolf

Humans stat: { name: "Cloud" , health: 100, hitStrength: 30, lvl: 1, xp: 0, race: "humans" };

Wereworf stat: { name: "Thad" , health: 30, hitStrength: 10, lvl: 1, xp: 0 };

Tour 1 : Cloud attaque en 1er avec hitStrength * lvl => 30

Thad recoit 30 de degat -50% => 15, Thad health passe a 15

Tour 2 : Thad attaque Cloud avec hitStrength * lvl => 10

Cloud recoit 10 de degat, sa health passe a 90

Tour 3 : Cloud attaque avec hitStrength * lvl => 30

Thad recoit 30 de degat -50% => 15, Thad health passe a 0... bye bye Thad

Le combat est fini :

L'xp de Cloud augmente de 2

Cloud recupere 10% de health de Thad, 30 / 100 * 10 = 3

Cloud stat: { name: "Cloud" , health: 93, hitStrength: 30, lvl: 1, xp: 2, race: "humans" };