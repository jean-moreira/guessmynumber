"use scrict";

//////////////////////////
// guess my number doc ///
//////////////////////////

let score = 20;
let highscore = 0;

let elRandomNumber = Math.trunc(Math.random() * 20 + 1);
const checkBtn = document.querySelector(".gnmCheck");
const ScoreDivAll = document.querySelector(".gnmScore");
const scoreSelector = document.querySelector(".jsScore");
const topSelector = document.querySelector(".gnmTop");
const bottomSelector = document.querySelector(".gnmBottom");
const secretNumberSelector = document.querySelector(".gnmNumberP");
const guessSelector = document.querySelector(".gnmGuess");
const highscoreSelector = document.querySelector(".jsHighscore");
const againSelector = document.querySelector(".gnmAgain");

// Function to display the future indicator

const indicator = function (indicator) {
  document.querySelector(".gnmGuessIndicator").textContent = indicator;
};

// win/loss effect
const gameLost = function () {
  indicator("☠️ You lost the game");
  topSelector.style.backgroundColor = "crimson";
  bottomSelector.style.backgroundColor = "crimson";
  secretNumberSelector.textContent = elRandomNumber;
  guessSelector.style.backgroundColor = "#222";
  guessSelector.disabled = true;
};

const gameWon = function () {
  indicator(" 🔥 You won the game 🔥");
  topSelector.style.backgroundColor = "#30C030";
  bottomSelector.style.backgroundColor = "#30C030";
  guessSelector.style.backgroundColor = "#30C030";
  secretNumberSelector.textContent = elRandomNumber;
  guessSelector.disabled = true;
};

checkBtn.addEventListener("click", function () {
  const gnmGuessValue = Number(document.querySelector(".gnmGuess").value);

  //   first if to block btn when lost
  //  Different case that can happen
  if (score > 0) {
    if (!gnmGuessValue) {
      indicator("🚫 enter a value first !");
    }
    // Incorrect number
    else if (gnmGuessValue < 1 || gnmGuessValue > 20) {
      indicator("between 1 and 20 !");
    }
    // indication + if lost effect
    else if (gnmGuessValue < elRandomNumber) {
      indicator("📉 too low");
      score--;
      scoreSelector.textContent = score;
      if (score < 1) {
        gameLost();
      }
    } else if (gnmGuessValue > elRandomNumber) {
      indicator("📈 too high");
      score--;
      scoreSelector.textContent = score;
      if (score < 1) {
        gameLost();
      }
    }
    // if win and if new highscore
    else {
      gameWon();
      if (score > highscore) {
        highscore = score;
        highscoreSelector.textContent = score;
      }
    }
  }
});

// restart the game
againSelector.addEventListener("click", function () {
  score = 20;
  elRandomNumber = Math.trunc(Math.random() * 20 + 1);
  indicator("Here we go again ");
  topSelector.style.backgroundColor = "#eee";
  bottomSelector.style.backgroundColor = "#eee";
  secretNumberSelector.textContent = "?";
  guessSelector.value = "";
  guessSelector.style.backgroundColor = "#eee";
  scoreSelector.textContent = score;
  guessSelector.disabled = false;
});
