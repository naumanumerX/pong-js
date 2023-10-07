import Ball from "./Ball.js";
import Paddle from "./Paddle.js";


const playerPaddleRect = document.querySelector("#player-paddle").getBoundingClientRect();
const computerPaddleRect = document.querySelector("#computer-paddle").getBoundingClientRect();

const playerPaddle = new Paddle(document.querySelector("#player-paddle"), [playerPaddleRect]);
const computerPaddle = new Paddle(document.querySelector("#computer-paddle"), [computerPaddleRect]);




// Now create the ball object after initializing the paddles
const ball = new Ball(document.querySelector("#ball"), [playerPaddle.rect(), computerPaddle.rect()]);

const playerScoreEle = document.getElementById("player-score");
const computerScoreEle = document.getElementById("computer-score");

let lastTime;

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
    computerPaddle.update(delta, ball.position.top + ball.position.height / 2);
    if (isLose()) handleLose();
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

function isLose() {
  const rect = ball.position;
  return rect.right >= window.innerWidth || rect.left <= 0;
}

function handleLose() {
  const rect = ball.position;
  if (rect.right >= window.innerWidth) {
    playerScoreEle.textContent = parseInt(playerScoreEle.textContent) + 1;
  } else {
    computerScoreEle.textContent = parseInt(computerScoreEle.textContent) + 1;
  }
  ball.reset();
  computerPaddle.reset();
}

document.addEventListener("mousemove", (e) => {
  playerPaddle.position = (e.clientY / window.innerHeight) * 100;
});

window.requestAnimationFrame(update);
