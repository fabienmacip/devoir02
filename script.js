// Initialisation des scores
let roundScore1 = 0;
let roundScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;

// Savoir qui est en train de jouer
let tourJoueur1 = true;
let tourJoueur2 = false;

// On récupère les éléments du DOM
const newGame = document.getElementById('new-game');

const circle1 = document.getElementById('circle-player-1');
const circle2 = document.getElementById('circle-player-2');

const player1GlobalScore = document.getElementById('player1-global-score');
const player2GlobalScore = document.getElementById('player2-global-score');

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const dice5 = document.getElementById('dice5');
const dice6 = document.getElementById('dice6');

const currentScore1 = document.getElementById('current-score-1');
const currentScore2 = document.getElementById('current-score-2');

const rollDice = document.getElementById('roll-dice');
const hold = document.getElementById('hold');

// FONCTIONS liées aux clics sur les boutons
// Lance une nouvelle partie
function runNewGame() {
  console.log("New Game");
  initGame();
}

// Affichage du bon dé
function displayDice(diceNumber){
switch(diceNumber){
  case 1:
    dice1.style.display = 'inline-block';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';
    break;
    
  case 2:
    dice1.style.display = 'none';
    dice2.style.display = 'inline-block';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';
    break;

  case 3:
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'inline-block';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'none';
    
  case 4:
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'inline-block';
    dice5.style.display = 'none';
    dice6.style.display = 'none';
      
  case 5:
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'inline-block';
    dice6.style.display = 'none';

  case 6:
    dice1.style.display = 'none';
    dice2.style.display = 'none';
    dice3.style.display = 'none';
    dice4.style.display = 'none';
    dice5.style.display = 'none';
    dice6.style.display = 'inline-block';
  default:
    break;
}
}

// Lance le dé
function throwDice(){
  let myDice = Math.floor((Math.random(0,1) * 6) + 1);
  displayDice(myDice);
  // Si le résultat est 1, alors le joueur a fini son tour
  if(myDice === 1){
    if(tourJoueur1){
      // Changement de joueur
      tourJoueur1 = false;
      tourJoueur2 = true;
      // Mise à jour du score
      globalScore1 += roundScore1;
      roundScore1 = 0;
      // Affichage du cercle rouge
      circle1.style.visibility = 'hidden';
      circle2.style.visibility = 'visible';
    }
    else {
      // Changement de joueur
      tourJoueur1 = true;
      tourJoueur2 = false;
      // Mise à jour du score
      globalScore2 += roundScore2;
      roundScore2 = 0;
      // Affichage du cercle rouge
      circle1.style.visibility = 'visible';
      circle2.style.visibility = 'hidden';
    }
  }
}

// Enregistre le score
function holdDice(diceNumber) {
console.log("Dé numéro " + diceNumber);
}


// Ajout des écouteurs d'événement
newGame.addEventListener("click",runNewGame);
rollDice.addEventListener("click",throwDice);
hold.addEventListener("click",holdDice);


// Initialisation du jeu
function initGame(){
  dice1.style.display = 'inline-block';
  dice2.style.display = 'none';
  dice3.style.display = 'none';
  dice4.style.display = 'none';
  dice5.style.display = 'none';
  dice6.style.display = 'none';

  circle1.style.visibility = 'visible';
  circle2.style.visibility = 'hidden';

  roundScore1 = 0;
  roundScore2 = 0;
  globalScore1 = 0;
  globalScore2 = 0;
  
  player1GlobalScore.textContent = globalScore1;
  player2GlobalScore.textContent = globalScore2;
  currentScore1.textContent = roundScore1;
  currentScore2.textContent = roundScore2;

  //TO DO 
  //Désactiver le boutton HOLD en début de partie
  //hold.disable(false);
  
}

initGame();



