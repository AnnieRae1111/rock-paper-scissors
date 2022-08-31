let player1Array = ['🤘', '✂️', '📃'];
let player2Array = ['🤘', '✂️', '📃'];
const rock = '🤘';
const paper = '📃';
const scissors = '✂️';
let temp;
let player1;
let player2;

//player1 click
let button1 = document.getElementById('button1');
let player1Display = document.querySelector('.player1-rock');

//player2click
let button2 = document.getElementById('button2');
let player2Display = document.querySelector('.player2-rock');

const onClick1 = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    player1 = temp;
  }
};

const onClick2 = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    player2 = temp;
  }
};

let player1Wins = document.querySelector('.player1-wins');
let player2Wins = document.querySelector('.player2-wins');
let tie = document.querySelector('.tie');

const declareWinner = () => {
  console.log(player1, player2, 'player1 and 2');
  console.log(rock, paper, scissors, 'rock paper scissors');
  if (player1 === '🤘' && player2 === '✂️') {
    player1Wins.classList.remove('hide');
  } else if (player1 === '🤘' && player2 === '📃') {
    player2Wins.classList.remove('hide');
  } else if (player1 === '🤘' && player2 === '🤘') {
    tie.classList.remove('hide');
  } else if (player1 === '✂️' && player2 === '🤘') {
    player2Wins.classList.remove('hide');
  } else if (player1 === '✂️' && player2 === '📃') {
    player1Wins.classList.remove('hide');
  } else if (player1 === '✂️' && player2 === '✂️') {
    tie.classList.remove('hide');
  } else if (player1 === '📃' && player2 === '🤘') {
    player1Wins.classList.remove('hide');
  } else if (player1 === '📃' && player2 === '✂️') {
    player2Wins.classList.remove('hide');
  } else if (player1 === '📃' && player2 === '📃') {
    tie.classList.remove('hide');
  }
};

const clearWinner = () => {
  setTimeout(() => {
    player1Wins.classList.add('hide');
    player2Wins.classList.add('hide');
    tie.classList.add('hide');
    player1Display.classList.add('hide');
    player2Display.classList.add('hide');
  }, 2500);
};

button1.addEventListener('click', () => {
  onClick1(player1Array);
  player1Display.innerHTML = player1;
  player1Display.classList.remove('hide');
  console.log(player1, 'player1');
  declareWinner();
  clearWinner();
});

//player2 click

button2.addEventListener('click', () => {
  onClick2(player2Array);
  player2Display.innerHTML = player2;
  player2Display.classList.remove('hide');
  console.log(player2, 'player2');
  declareWinner();
  clearWinner();
});
