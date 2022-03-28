const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let choice = choices[Math.floor(Math.random() * 3)]
    console.log(choice)
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie";
    }
    else if ((computerSelection == "rock" && playerSelection.toLowerCase() == "paper") || 
             (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") ||
             (computerSelection == "scissors" && playerSelection.toLowerCase == "rock"))  {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose. ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("please enter rock, paper or scissors");
        let playerChoice = prompt().toLowerCase();
        while (playerChoice != choices[1] &&playerChoice != choices[0] && playerChoice != choices[2]) {
            console.log(playerChoice + " is not a valid choice");
            playerChoice = prompt().toLowerCase();
        }

        let result = playRound(playerChoice, computerPlay());
        console.log(result);
        if (result[4] == 'W') {
            playerScore += 1;
        }
        else if (result[4] == 'L') {
            computerScore += 1;
        }
        console.log("The score is Currently " + playerScore + " to " + computerScore);
    }

    if (computerScore == playerScore) {
        console.log("It was a tie");
    }
    else if (computerScore > playerScore) {
        console.log("The player won");
    }
    else {
        console.log("The computer won");
    }
}

game();