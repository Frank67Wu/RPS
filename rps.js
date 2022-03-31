
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

let btns = document.getElementsByTagName('button');


let computerScore = 0;
let playerScore = 0;

let pScore = document.createElement('h2');
let pChoice = document.createElement('h2');
pScore.textContent = `playerScore: ${playerScore}`;

let cScore = document.createElement('h2');
let cChoice = document.createElement('h2');
cScore.textContent = `computerScore: ${computerScore}`

document.getElementById('score').appendChild(pScore);
document.getElementById('score').appendChild(cScore);





for (let i = 0; i < 3; i++) {
  btns.item(i).addEventListener('click', function() {

    if (computerScore < 5 && playerScore < 5) {
      let result = document.createElement('h1');
      let c = computerPlay()
      let r = (playRound(btns.item(i).innerText, c)) 
      
  
      result.textContent = r;
      console.log(r);
  
      if (result.textContent[4] == 'W') {
        playerScore += 1;
      }
      else if (result.textContent[4] == 'L') {
        computerScore += 1;
      }
  
      console.log(playerScore);
      console.log(computerScore);
      pScore.textContent = `playerScore: ${playerScore}`;
      cScore.textContent = `computerScore: ${computerScore}`

      cChoice.textContent = btns.item(i).innerText;
      pChoice.textContent = c;
  
      console.log(document.getElementById('results').childNodes.length);
      if (document.getElementById('results').childNodes.length != 0) {
        document.getElementById('results').removeChild(document.getElementById('results').firstElementChild);
      }

      if (playerScore > 4) {
        result.textContent = `The player won, the final score is ${playerScore} : ${computerScore}`;
      }
      if (computerScore > 4) {
        result.textContent = `The computer won, the final score is ${computerScore} : ${playerScore}`;
      }
      
      document.getElementById('choice').appendChild(cChoice);
      document.getElementById('choice').appendChild(pChoice);
      document.getElementById('results').appendChild(result); 
    }



  });

}


btns.item(3).addEventListener('click', function() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('results').removeChild(document.getElementById('results').firstElementChild);
  document.getElementById('choice').removeChild(document.getElementById('choice').firstElementChild);
  document.getElementById('choice').removeChild(document.getElementById('choice').firstElementChild);

  let res = document.createElement('h1');
  res.textContent = "The game has been reset";

  document.getElementById('results').appendChild(res);
  pScore.textContent = `playerScore: ${playerScore}`;
  cScore.textContent = `computerScore: ${computerScore}`
});

