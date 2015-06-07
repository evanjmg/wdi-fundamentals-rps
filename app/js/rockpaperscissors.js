
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    // An expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   if(move) { return move}
   else { return getInput();}
}

function getComputerMove(move) {
    // An expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     if(move) { return move}
   else { return randomPlay();}
}

function getWinner(playerMove,computerMove) {
    var winner;
     if (computerMove == playerMove) {  winner = "tie"; console.log("It's a tie! Let's try again.") }
    else if (playerMove == "rock") { 
        if (computerMove == "paper") {
        winner = "computer";
     } else { winner = "player";} }
   else if (playerMove == "paper") { 
        if (computerMove == "scissors") {winner = "computer";
        } else { winner = "player";} } 
    else if (playerMove == "scissors") {
         if (computerMove == "paper") { winner = "computer" } 
            else {winner = "player";}
        } 
    else  {
        console.log("Please retry - entry not valid")
     } 
       

   
    return winner;
}
// play asks how many rounds to play to and runs the functions above for the game.
function play() {
    console.log("Let's play Rock, Paper, Scissors. How many rounds would you like to play to?");
    
    var x = prompt();

    var playerWins = 0;
    var computerWins = 0;
  
   while(playerWins < x && computerWins < x ) {
     var playerMove = getPlayerMove()
    var computerMove = getComputerMove()
     var winner = getWinner(playerMove, computerMove);
    console.log('Player chose ' + playerMove  + ' while Computer chose ' + computerMove );
    if (winner == 'player') { playerWins++ } 
    else if (winner == 'computer') { computerWins++ }
    else {"tie"}
   console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
   }

    return [playerWins, computerWins];
}
play();
