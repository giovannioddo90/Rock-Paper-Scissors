let humanScore = 0;
let computerScore = 0;

function getComputerChioce() {
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

console.log(getComputerChioce());

function getHumanChoice() {
  //ask user for valid input 1 2 or 3, rock/paper/scissors
  const choice = Number(window.prompt('1 - rock, 2 - paper, 3 - scissors', ''));
  //switch/case for input
  switch(choice) {
    case 1: 
      return 'rock';
      break;
    case 2: 
      return 'paper';
      break;
    case 3:
      return 'scissors'
      break;
  }
}

