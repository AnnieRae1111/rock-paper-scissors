let array = ['🤘', '✂️', '📃'];
const rock = '🤘';
const paper = '📃';
const scissors = '✂️';
let temp;
let player1;
let plaarray;
const onClick = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log('temp', temp);
    return temp;
  }
};

console.log(temp);

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  onClick(player1);
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  onClick(player2);
});
