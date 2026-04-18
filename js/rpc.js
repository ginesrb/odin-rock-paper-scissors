const choices = ["rock", "paper", "scissors"];

var computerScore = 0;
var humanScore = 0;

// Return a random integer between 0 and max (exclusive) 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getHumanChoice() {
    const userChoice = prompt("rock, paper or scissors?");
    return userChoice.toLowerCase();
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice) {
    const rules = {
        rock: "scissors",   //rock beat scissors
        paper: "rock",      //paper beat rock
        scissors: "paper"   //scossors beat paper
    }

    if (computerChoice == humanChoice) {
        return console.log("It's a Tie!");
    }

    if (rules[computerChoice] == humanChoice){
        computerScore++;
        return console.log(`Computer win! ${computerChoice} beats ${humanChoice}`);
    } else {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

playRound(computerChoice, humanChoice);

console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`)