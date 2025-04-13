let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() { 
  switch (Math.floor(Math.random() * 3)) { 
    case 0:
      return 'rock'; 
      break;

    case 1:
      return 'paper';
      break;

    case 2:
      return 'scissors';
      break;

    default:
      break;
  } 
}

function playRound(humanChoice, computerChoice) {
  //human wins
  if(humanChoice === 'rock' && computerChoice === 'scissors') {
    alert('Player Scores!');
    humanScore++;
  }  
  else if(humanChoice === 'paper' && computerChoice === 'rock') {
    alert('Player Scores!');
    humanScore++;
  }
  else if(humanChoice === 'scissors' && computerChoice === 'paper') {
    alert('Player Scores!');
    humanScore++;
  }

  else if(humanChoice === computerChoice) {
    alert("It's a tie!");
  }

  else {
    alert(`Computer Scores! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  if (humanScore === 5) {
    alert('PLAYER WINS!');
    humanScore = 0;
    computerScore = 0;
  }

  else if (computerScore === 5) {
    alert('YOU LOSE! TRY AGAIN');
    humanScore = 0;
    computerScore = 0;
  }

  // Display scores
  scoreDiv.innerHTML = `Player Score: ${humanScore}<br>Computer Score: ${computerScore}`; 
}

const rockBtn = document.createElement('button');
rockBtn.id = 'rock-button'
rockBtn.textContent = 'Rock';
document.body.appendChild(rockBtn);

document.getElementById('rock-button').addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

const paperBtn = document.createElement('button');
paperBtn.id = 'paper-button';
paperBtn.textContent = 'Paper';
document.body.appendChild(paperBtn);

document.getElementById('paper-button').addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const scissorsBtn = document.createElement('button');
scissorsBtn.id = 'scissors-button';
scissorsBtn.textContent = 'Scissors';

document.body.appendChild(scissorsBtn);

document.getElementById('scissors-button').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

// DONE: Add a div for displaying results and change all of your console.logs into DOM methods.
const scoreDiv = document.createElement('div');
scoreDiv.id = 'score-div';
document.body.appendChild(scoreDiv)
scoreDiv.style = 'border: 1px solid black;'

scoreDiv.innerText = `Player Score: ${humanScore} \n Computer Score: ${computerScore}`;
