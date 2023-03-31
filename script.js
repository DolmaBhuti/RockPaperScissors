var getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1; //The following would give us a random number between 1 and 3:

  if (randomNumber === 1) {
    console.log("Rock");
    return "Rock";
  } else if (randomNumber === 2) {
    console.log("Paper");
    return "Paper";
  } else if (randomNumber === 3) {
    console.log("Scissors");
    return "Scissors";
  }
};

var playRockPaperScissors = (playerSelection, computerSelection) => {
  var player = playerSelection.toLowerCase();
  var comp = computerSelection.toLowerCase();

  if (player === "rock") {
    if (comp === "rock") {
      return "Its a Tie! You Both Choose Rock";
    } else if (comp === "paper") {
      return "You Lose! Paper Beats Rock";
    } else {
      return "You Win! Rock Beats Scissors";
    }
  } else if (player === "paper") {
    if (comp === "rock") {
      return "You Win! Paper Beats Rock";
    } else if (comp === "paper") {
      return "Its a Tie! You Both Choose Paper";
    } else {
      return "You Lose! Scissor Beats Paper";
    }
  } else if (player === "scissors") {
    if (comp === "rock") {
      return "You Lost! Rock Beats Scissors";
    } else if (comp === "paper") {
      return "You Win! Scissor Beats Rock";
    } else {
      return "Its a Tie! You Both Choose Scissors";
    }
  }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRockPaperScissors(playerSelection, computerSelection));
