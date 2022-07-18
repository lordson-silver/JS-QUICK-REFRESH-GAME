"use strict";

const attemptEl = document.getElementById("attempts");
const feedback = document.getElementById("feedback");
const randomNumEl = document.getElementById("randomNumber");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
let attempt = 3;

randomNumEl.innerText = "?";

let randomNum = Math.floor(Math.random() * 20) + 1;

const gameOver = () => {
  if (attempt <= 0) {
    feedback.innerText = "Game Over";
    submit.value = "Restart";
    // input.setAttribute("class", "hidden");
    input.classList.toggle("hidden"); // perfect
  }
};

const restart = () => {
  randomNum = Math.floor(Math.random() * 20) + 1;
  console.log(randomNum);
  submit.value = "submit";
  randomNumEl.innerText = "?";
  attempt = 3;
  input.classList.toggle("hidden");
  input.value = "";
  feedback.innerText = "FEEDBACK";
  attemptEl.innerText = attempt;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (submit.value === "submit") {
    let guess = Number(input.value);
    if (guess === randomNum) {
      feedback.innerText = "You Win";
      submit.value = "Restart";
      input.classList.toggle("hidden");
      randomNumEl.innerText = String(guess);
    } else if (guess < randomNum) {
      feedback.innerText = "Too Low";
      attempt--;
    } else {
      feedback.innerText = "Too High";
      attempt--;
    }
    attemptEl.innerText = attempt; // NICE
    gameOver();
  } else {
    restart();
  }
});
