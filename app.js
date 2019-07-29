let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randNumber = Math.floor(Math.random() * 3);
  return choices[randNumber];
}

function convertToWord(letter) {
  if (letter == "r") {
    return "Rock";
  }
  if (letter == "p") {
    return "Paper";
  }
  return "Scissor";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallComprWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} beats ${convertToWord(
    computer
  )}${smallComprWord} . You win!`;
}
function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallComprWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} defeats ${convertToWord(
    computer
  )}${smallComprWord} . You Lost..!`;
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComprWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} = ${convertToWord(
    computer
  )}${smallComprWord} . That's a Draw`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "pr":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissor_div.addEventListener("click", function() {
    game("s");
  });
}

main();
