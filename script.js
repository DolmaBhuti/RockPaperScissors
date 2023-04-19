const playerScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissor_btn = document.getElementById("scissor");
let playerScore = 0;
let compScore = 0;

function main() {
  rock_btn.addEventListener("click", function () {
    //only play if one of the players havent reacfhed 5
    playRound("rock");
  });
  paper_btn.addEventListener("click", function () {
    playRound("paper");
  });
  scissor_btn.addEventListener("click", function () {
    playRound("scissor");
  });
}

//if either player has reached 5 points, return false
var gameOver = function () {
  if (playerScore === 5) {
    result_div.textContent = "You WIN!";
    return true;
  } else if (compScore === 5) {
    result_div.textContent = "You LOSE!";
    return true;
  }
  return false;
};
var getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1; //The following would give us a random number between 1 and 3:

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissor";
  }
};

var playRound = (playerSelection) => {
  if (!gameOver()) {
    const computerSelection = getComputerChoice();
    var player = playerSelection.toLowerCase();
    var comp = computerSelection.toLowerCase();

    //rock-scissor -> rock wins
    //paper-rock -> paper wins
    //scissor-paper -> scissor
    if (player === comp) {
      result_div.textContent = "It's a tie! you both choose " + player;
    } else if (player === "rock") {
      if (comp === "paper") {
        ++compScore;
        compScore_span.textContent = compScore;
        result_div.textContent = "Paper Covers Rock.  You lose.";
      } else {
        ++playerScore;
        playerScore_span.textContent = playerScore;
        result_div.textContent = "Rock smashes scissor.  You win!";
      }
    } else if (player === "paper") {
      if (comp === "scissor") {
        ++compScore;
        compScore_span.textContent = compScore;
        result_div.textContent = "Scissor cuts paper.  You lose.";
      } else {
        ++playerScore;
        playerScore_span.textContent = playerScore;
        result_div.textContent = "Paper covers rock.  You win!";
      }
    } else if (player === "scissor") {
      if (comp === "rock") {
        ++playerScore;
        playerScore_span.textContent = playerScore;
        result_div.textContent = "Rock smashes scissor.  You win!";
      } else {
        ++compScore;
        compScore_span.textContent = compScore;
        result_div.textContent = "Scissor cuts paper.  You lose.";
      }
    }
  }
  gameOver();
};

main();
