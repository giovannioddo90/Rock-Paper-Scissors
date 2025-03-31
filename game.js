console.log("Hello world");

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


