const bin = document.getElementById('bin');
const paper = document.getElementById('paper');
const scoreDisplay = document.getElementById('score');
let score = 0;
let speed = 5;

document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'ArrowLeft') {
    moveBin(-10);
  } else if (event.key === 'd' || event.key === 'ArrowRight') {
    moveBin(10);
  }
});

function getRandomPosition() {
  const windowWidth = window.innerWidth;
  const randomX = Math.floor(Math.random() * (windowWidth - 50));
  return [randomX, -50];
}

function moveBin(offset) {
  const currentLeft = parseInt(bin.style.left) || 0;
  const newLeft = Math.max(0, Math.min(window.innerWidth - 100, currentLeft + offset));
  bin.style.left = newLeft + 'px';
}

function movePaper() {
  const [x, y] = getRandomPosition();
  paper.style.left = x + 'px';
  paper.style.top = y + 'px';
}

function checkCollision() {
  const binRect = bin.getBoundingClientRect();
  const paperRect = paper.getBoundingClientRect();
  return !(binRect.right < paperRect.left ||
           binRect.left > paperRect.right ||
           binRect.bottom < paperRect.top ||
           binRect.top > paperRect.bottom);
}

function updateScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

function increaseSpeed() {
  speed += 0.1;
}

function gameLoop() {
  const paperTop = parseInt(paper.style.top) || 0;
  if (paperTop > window.innerHeight) {
    movePaper();
    increaseSpeed();
  } else {
    paper.style.top = paperTop + speed + 'px';
  }

  if (checkCollision()) {
    updateScore();
    movePaper();
    increaseSpeed();
  }

  requestAnimationFrame(gameLoop);
}

movePaper();
gameLoop();
