const choices = ["Rock", "Paper", "Scissors"]

var scores = {
    player : 0,
    cpu    : 0
}

function checkWinner(playerChoice){
    var rand = Math.floor((Math.random() * 3));
    var choice = choices[rand];

    console.log(choice);
    switch(choice){
        case "Rock":
            if(playerChoice != "Paper"){
                console.log("You Loose");
                updateScores("Loose");
            }
            else{
                console.log("You Win");
                updateScores("Win");
            }
        break;
        case "Paper":
                if(playerChoice != "Scissors"){
                    console.log("You Loose");
                    updateScores("Loose");
                }
                else{
                    console.log("You Win");
                    updateScores("Win");
                }
        break;
        case "Scissors":
                if(playerChoice != "Rock"){
                    console.log("You Loose");
                    updateScores("Loose");
                }
                else{
                    console.log("You Win");
                    updateScores("Win");
                }
        break;
    }
}

function updateScores(result){
    if(result != "Win"){
        scores.cpu ++;
        document.getElementById("score-cpu").innerHTML = scores.cpu;
        document.getElementById("result").innerHTML = "You Loose!";
    }
    else{
        scores.player ++;
        document.getElementById("score-player").innerHTML = scores.player;
        document.getElementById("result").innerHTML = "You win!";
    }

}

function resetGame(){
    scores.player = 0;
    scores.cpu = 0;
    document.getElementById("score-player").innerHTML = scores.player;
    document.getElementById("score-cpu").innerHTML = scores.cpu;
    document.getElementById("result").innerHTML = "Pick Something";
}

document.getElementById("rock-btn").addEventListener("click", () => checkWinner("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => checkWinner("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => checkWinner("Scissors"));

document.getElementById("reset-btn").addEventListener("click", () => resetGame());
