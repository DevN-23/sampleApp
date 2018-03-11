let user_score = 0;
let comp_score = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_main = document.querySelector(".score-board");
const result_section = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(letter) {
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  else return "Scissor";
}

function getCompchoice() {
  var choices = ["r", "p", "s"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, compChoice) {
  const small_userword = "user".fontsize(4).sub();
  const small_compword = "comp".fontsize(4).sub();
  const userChoice_div = document.getElementById(userChoice);
  user_score++;
  userScore_span.innerHTML = user_score;
  compScore_span.innerHTML = comp_score;
  result_section.innerHTML = `${convertToWord(userChoice) + small_userword} beats ${convertToWord(compChoice) + small_compword}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
}

function lose (userChoice, compChoice) {
  const small_userword = "user".fontsize(4).sub();
  const small_compword = "comp".fontsize(4).sub();
  const userChoice_div = document.getElementById(userChoice);
  comp_score++;
  userScore_span.innerHTML = user_score;
  compScore_span.innerHTML = comp_score;
  result_section.innerHTML = `${convertToWord(userChoice) + small_userword} looses to ${convertToWord(compChoice) + small_compword}. You loose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
}

function draw(userChoice, compChoice) {
  const small_userword = "user".fontsize(4).sub();
  const small_compword = "comp".fontsize(4).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_section.innerHTML = `${convertToWord(userChoice) + small_userword} equals ${convertToWord(compChoice) + small_compword}. It's a draw!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 400);
}

function game(userChoice) {
  var compChoice = getCompchoice();
  switch( userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissor_div.addEventListener('click', () => game("s"));
}

main();
