let player1 = ['🤘', '✂️', '📃'];
let player2 = ['🤘', '✂️', '📃'];

const onClick = (player) => {
  for (let i = player.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = player[i];
    player[i] = player[j];
    player[j] = temp;
    console.log('temp', temp);
    return temp;
  }
};

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  onClick(player1);
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  onClick(player2);
});
