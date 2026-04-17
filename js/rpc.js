const choices = ["rock", "paper", "scissors"];

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