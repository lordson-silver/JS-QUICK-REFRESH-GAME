"use strict";

const attemptEl = document.getElementById("attempts");
const feedback = document.getElementById("feedback");
const randomNumEl = document.getElementById("randomNumber");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

let attempt = 3;
let randomNum = 0;
let random = () => {
    return Math.floor(Math.random() * 20) + 1;
};

const start = () => {
  randomNumEl.innerText = "?";
  input.value = "";
  attempt = 3;
  feedback.innerText = "FEEDBACK";
  attemptEl.innerText = attempt;
  randomNum = random();
  console.log(randomNum);
};

const hide = () => {
  input.classList.toggle("hidden");
};


function gameOver() {
  if (attempt <= 0) {
    feedback.innerText = "Game Over";
    submit.value = "Restart";
    hide(); // hide input
  };
}; 

const restart = () => {
  submit.value = "submit";
  start();
  hide();
};

start();


submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (submit.value === "submit") {
    let guess = Number(input.value);

    // if (guess === randomNum) {
    //   feedback.innerText = "You Win";
    //   submit.value = "Restart";
    //   hide(); // hide input
    //   randomNumEl.innerText = String(guess);
    // } else if (guess < randomNum) {
    //   feedback.innerText = "Too Low";
    //   attempt--;
    // } else {
    //   feedback.innerText = "Too High";
    //   attempt--;
    // }

    // using switch statement to handle feedback
    switch (true) {
      case guess === randomNum:
        feedback.innerText = "You Win";
        submit.value = "Restart";
        hide(); // hide input
        randomNumEl.innerText = String(guess);
        break;
      case guess < randomNum:
        feedback.innerText = "Too Low";
        attempt--;
        break;
      case guess > randomNum:
        feedback.innerText = "Too High";
        attempt--;
        break;
      default:  ;
    };

    attemptEl.innerText = attempt; // update attempts
    gameOver(); // check if game is over
  } else {
    restart();
  }
});
