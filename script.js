// Initialisation des scores
let roundScore1 = 0;
let roundScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;

// On récupère les éléments du DOM
let newGame = document.getElementById('new-game');

let circle1 = document.getElementById('circle-player-1');
let circle2 = document.getElementById('circle-player-2');

let player1GlobalScore = document.getElementById('player1-global-score');
let player2GlobalScore = document.getElementById('player2-global-score');

let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');

let currentScore1 = document.getElementById('current-score-1');
let currentScore2 = document.getElementById('current-score-2');

let rollDice = document.getElementById('roll-dice');
let hold = document.getElementById('hold');