const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

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

function playRound(computerChoice, humanChoice) {
    const rules = {
        rock: "scissors",   //rock beat scissors
        paper: "rock",      //paper beat rock
        scissors: "paper"   //scossors beat paper
    }

    if (computerChoice == humanChoice) {
        console.log("It's a Tie!");
        return;
    }

    if (rules[computerChoice] == humanChoice){
        console.log(`Computer win! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return
    }
}

function playGame() {
    for (let rounds = 5; rounds > 0; rounds--) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    if (computerScore == humanScore) {
        console.log(`It's a Tie!`);
    } else if (computerScore > humanScore) {
        console.log(`Computer win!`);
    } else {
        console.log(`You win!`);
    }
}

playGame();