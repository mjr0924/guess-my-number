let number = document.querySelector(".number");
let randomNumber = Math.trunc(Math.random() * 21);
// number.textContent = randomNumber;
let check = document.querySelector(".check");
let score = 20;
let highscore = 0;
let message = document.querySelector(".message");

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, randomNumber);

  // when no input
  if (!guess) {
    message.textContent = "⛔ no number";
  }

  // when you win
  else if (guess === randomNumber) {
    message.textContent = "🎉 correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    check.disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== randomNumber) {
    score--;
    if (score >= 1) {
      document.querySelector(".score").textContent = score;
      if (guess > randomNumber) {
        message.textContent = "↗️ too high";
      } else if (guess < randomNumber) {
        message.textContent = "↘️ too low";
      }
    } else {
      message.textContent = "you lose";
      document.querySelector(".score").textContent = score;
      check.disabled = true;
    }
  }
});

let again = document.querySelector(".again");
again.addEventListener("click", function () {
  // console.log("reset every thing");
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".guess").value = "";
  number.textContent = "?";
  message.textContent = "start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  check.disabled = false;
});
