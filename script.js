var getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1; //The following would give us a random number between 1 and 3:

  if (randomNumber === 1) {
    console.log("Computer Chooses Rock");
    return "Rock";
  } else if (randomNumber === 2) {
    console.log("Computer Chooses Paper");
    return "Paper";
  } else if (randomNumber === 3) {
    console.log("Computer Chooses Scissors");
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

var game = function () {
  let count = 0;
  let playerScore = 0;
  let compScore = 0;

  while (count < 5) {
    //Use prompt() to get input from the user.
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    let result = playRockPaperScissors(playerSelection, computerSelection);

    //display the results of each round
    console.log(result);
    if (result.toLowerCase().includes("win")) {
      ++playerScore;
      ++count;
    } else if (result.toLowerCase().includes("lose")) {
      {
        ++compScore;
        ++count;
      }
    } else {
      console.log("It's a tie");
    }
  }
  //display the winner at the end
  if (playerScore > compScore) {
    console.log(`You Win! You have ${playerScore} points`);
  } else {
    console.log(`You Lose! You have ${playerScore} points`);
  }
  return;
};
game();
