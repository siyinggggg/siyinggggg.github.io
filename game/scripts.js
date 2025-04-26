const cardsArray = [
  { name: 'rabbit', img: 'game/img/rabbit.png' },
  { name: 'boardgame', img: 'game/img/boardgame.png' },
  { name: 'bubble', img: 'game/img/bubble.png' },
  { name: 'biscuits', img: 'game/img/biscuits.png' },
  { name: 'cookies', img: 'game/img/tamagotchi.png' },
  { name: 'plastic', img: 'game/img/ruyi.png' }
];

const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

const game = document.querySelector('.memory-game');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchesFound = 0;

// Create and display cards
gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('memory-card');
  card.dataset.name = item.name;

  const front = document.createElement('img');
  front.classList.add('front-face');
  front.src = item.img;

  const back = document.createElement('img');
  back.classList.add('back-face');
  back.src = 'game/img/back.png';

  card.appendChild(back);
  card.appendChild(front);

  card.addEventListener('click', flipCard);

  game.appendChild(card);
});

function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains('revealed')) return;

  this.classList.add('revealed');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchesFound++;
  if (matchesFound === cardsArray.length) {
    modal.style.display = "block";
  }
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('revealed');
    secondCard.classList.remove('revealed');
    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

var modal = document.getElementById("game-modal");

var btn = document.getElementById("modal-button");

window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
