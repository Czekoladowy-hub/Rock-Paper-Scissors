const buttons = document.querySelectorAll(".buttonOption");
const playerChoiceBox = document.querySelector("#playerChoice");
const computerChoiceBox = document.querySelector("#computerChoice");
const computerOptions = ["Rock", "Paper", "Scissors"];
const playerScoreBox = document.querySelector("#score-left");
const computerScoreBox = document.querySelector("#score-right");
const winnerBox = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset");

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function playRound() {
  playerSelect();
  computerSelect();
  roundWinner();
  checkGameEnd();
  blockOptionButtons();
}

function playerSelect() {
  playerChoice = event.target.dataset.option;
  playerChoiceBox.innerHTML = "Player choice: " + playerChoice;
  console.log("Player choice: " + playerChoice);
}

function computerSelect() {
  computerChoice =
    computerOptions[[Math.floor(Math.random() * computerOptions.length)]];
  computerChoiceBox.innerHTML = "Computer choice: " + computerChoice;
  console.log("Computer choice: " + computerChoice);
}

function roundWinner() {
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore += 1;
    playerScoreBox.innerHTML = playerScore;
  } else if (playerChoice === computerChoice) {
    return;
  } else {
    computerScore += 1;
    computerScoreBox.innerHTML = computerScore;
  }
}

function checkGameEnd() {
  if (playerScore === 5) {
    winnerBox.innerHTML = "You WON!";
  } else if (computerScore === 5) {
    winnerBox.innerHTML = "Computer won this time!";
  }
}

function blockOptionButtons() {
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => (button.disabled = true));
  }
}

resetBtn.addEventListener("click", setGame);

function setGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreBox.innerHTML = playerScore;
  computerScoreBox.innerHTML = computerScore;
  winnerBox.innerHTML = "";
  playerChoiceBox.innerHTML = "";
  computerChoiceBox.innerHTML = "";
  buttons.forEach((button) => (button.disabled = false));
}
