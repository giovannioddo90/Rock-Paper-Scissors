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

// function getHumanChoice() {
//   //ask user for valid input 1 2 or 3, rock/paper/scissors
//   const choice = Number(window.prompt('1 - rock, 2 - paper, 3 - scissors', ''));
//   //switch/case for input
//   switch(choice) {
//     case 1: 
//       return 'rock';
//       break;
//     case 2: 
//       return 'paper';
//       break;
//     case 3:
//       return 'scissors'
//       break;
//   }
// }

function playRound(humanChoice, computerChoice) {
  //human wins
  if(humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('Player Wins!');
    humanScore++;
  }  
  else if(humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('Player Wins!');
    humanScore++;
  }
  else if(humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Player Wins!');
    humanScore++;
  }

  else if(humanChoice === computerChoice) {
    console.log("It's a tie!");
  }

  else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

}

// function playGame() {

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// alert(`Player Score: ${humanScore}, Computer Score ${computerScore}`);

// }

// if(humanScore > computerScore) {
//   return alert("Player wins the game!");
// }
// else if (humanScore === computerScore) {
//   return alert("The game is a tie!");
// }
// else {
//   return alert("The computer wins!");
// }


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

// TODO: Add a div for displaying results and change all of your console.logs into DOM methods.

//playGame();
