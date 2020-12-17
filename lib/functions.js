const terminalSimulation = document.getElementById("battle-sim");

export function send(content, mtype){
    
    let li = document.createElement("li");
            li.style.listStyle = "none";

            switch(mtype){
                case "hurt" : 
                li.style.color = "#00e7ff";
                break;
                case "win" : 
                li.style.color = "#71f756";
                break;
                case "death" : 
                li.style.color = "#fb1777";
                break;
                case "attack" : 
                li.style.color = "#ffff3c";
                break;
                default :
                li.style.color = "white";
            }

            li.innerHTML = content;
            terminalSimulation.appendChild(li);
            
}

const player1Stats = document.getElementById("p1-Stats");
const player2Stats = document.getElementById("p2-Stats");

export function stats(content, to){
    
    let div = document.createElement("div");
    div.className = "flex";
    
    div.innerHTML = 
    "<div><li class='name'>Name: " + content["name"] + "</li><br>" +
    "<li class='race'>Race: " + content["race"] + "</li><br>" +
    
    "<li class='hp'><label for='healthbar'>HP: </label><progress id='healthbar' value='" 
    + content["health"] + "' max='100'>" + content["health"] + "</progress></li><br></div>" +
    
    "<div><li class='attack'>Attack: " + content["hitStrength"] + "</li><br>" +
    "<li class='lvl'>Level: " + content["lvl"] + "</li><br>" +
    
    "<li class='xp'><label for='expbar'>XP: </label><progress id='expbar' value='" 
    + content["xp"] + "' max='10'>" + content["xp"]; "</progress></li></div>";
    
    if(to == "p1-Stats"){
        player1Stats.appendChild(div);
    }
    if(to == "p2-Stats"){
        player2Stats.appendChild(div);
    }
}

export function clearStats(player){

    if(player == "p1-Stats"){
        player1Stats.innerHTML = "";
    }
    if(player == "p2-Stats"){
        player2Stats.innerHTML = "";
    }
    
            
}

export function clearSimulation(){
    terminalSimulation.innerHTML = "";
}