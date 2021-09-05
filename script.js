//import { displayDice } from './fonctions.js';

// Initialisation des scores
let roundScore = 0;
let globalScore1 = 0;
let globalScore2 = 0;

// Savoir qui est en train de jouer
let tourJoueur1 = true;
let tourJoueur2 = false;

// Valeur du dé
var diceValue = 1;

// Score pour gagner
const SCORE_TO_WIN = 100;

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
const holdScore = document.getElementById('hold');

// FONCTIONS liées aux clics sur les boutons
// Lance une nouvelle partie
function runNewGame() {
  if ( confirm( "Relancer une partie ?" ) ) {
    initGame();
  }
}

// Affichage du bon dé / Fonction à inclure dans un autre fichier
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
      break;
      
    case 4:
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'inline-block';
      dice5.style.display = 'none';
      dice6.style.display = 'none';
      break;
        
    case 5:
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'inline-block';
      dice6.style.display = 'none';
      break;
  
    case 6:
      dice1.style.display = 'none';
      dice2.style.display = 'none';
      dice3.style.display = 'none';
      dice4.style.display = 'none';
      dice5.style.display = 'none';
      dice6.style.display = 'inline-block';
      break;
    default:
      break;
  } // Fin Switch
  } // Fin fonction

// Lance le dé
function throwDice(){
  diceValue = Math.floor((Math.random(0,1) * 6) + 1);
  displayDice(diceValue);


    /* TENTATIVE d'animation
      let i = 0
      let x = setInterval(function(){   
        myDice = Math.floor((Math.random(0,1) * 6) + 1);
        displayDice(myDice);
        i++;
        if (i === 12) {clearInterval(x);}
      }, 
        100);
    */  

  // Si le résultat est 1, alors le joueur a fini son tour
  if(diceValue == 1){
    if(tourJoueur1){
      // Changement de joueur
      tourJoueur1 = false;
      tourJoueur2 = true;
      // Mise à jour du score
      roundScore = 0;
      currentScore1.textContent = 0;

      // Affichage du cercle rouge
      circle1.style.visibility = 'hidden';
      circle2.style.visibility = 'visible';
      return;
    }
    else {
      // Changement de joueur
      tourJoueur1 = true;
      tourJoueur2 = false;
      // Mise à jour du score
      roundScore = 0;
      currentScore2.textContent = 0;

      // Affichage du cercle rouge
      circle1.style.visibility = 'visible';
      circle2.style.visibility = 'hidden';
      return;
    }
  } // Fin if(diceValue === 1)

  // Ici, on a fait autre chose que 1, donc on réactive le bouton HOLD
  holdScore.disabled = false;

  // Sinon, entre 2 et 6
  if(tourJoueur1){
    // On augmente le score
    
    roundScore += diceValue;
    currentScore1.textContent = roundScore;
        
  }
  else {
    
    roundScore += diceValue;
    currentScore2.textContent = roundScore;
    
  }

}

// Message d'alerte pour le gagnant
function winner(numJoueur) {
  let msg = numJoueur == 1 ? globalScore1 : globalScore2;
  msg = "BRAVO Joueur " + numJoueur + " !!!\n\nVous avez gagné avec un score de " +  msg + ".";
  holdScore.disabled = true;
  rollDice.disabled = true;
  alert(msg);
}

// Enregistre le score
function holdDice() {

    if(tourJoueur1){
      // Changement de joueur
      tourJoueur1 = false;
      tourJoueur2 = true;

      // Mise à jour du score
      globalScore1 += roundScore;
      roundScore = 0;

      // Affichage du score
      player1GlobalScore.textContent = globalScore1;
      currentScore1.textContent = roundScore;

      // Affichage du cercle rouge
      circle1.style.visibility = 'hidden';
      circle2.style.visibility = 'visible';

      // Si le joueur a atteint 100 points.
      if(globalScore1 >= SCORE_TO_WIN) {
        winner(1);
        return;
      }

      return;
    }
    else {
      // Changement de joueur
      tourJoueur1 = true;
      tourJoueur2 = false;

      // Mise à jour du score
      globalScore2 += roundScore;
      roundScore = 0;

      // Affichage du score
      player2GlobalScore.textContent = globalScore2;
      currentScore2.textContent = roundScore;

      // Affichage du cercle rouge
      circle1.style.visibility = 'visible';
      circle2.style.visibility = 'hidden';

      // Si le joueur a atteint 100 points.
      if(globalScore2 >= SCORE_TO_WIN) {
        winner(2);
        return;
      }
      
      return;
    }

}


// Ajout des écouteurs d'événement
newGame.addEventListener("click",runNewGame);
rollDice.addEventListener("click",throwDice);
holdScore.addEventListener("click",holdDice);


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

  roundScore = 0;
  globalScore1 = 0;
  globalScore2 = 0;
  diceValue = 1;
  tourJoueur1 = true;
  tourJoueur2 = false;
  
  player1GlobalScore.textContent = globalScore1;
  player2GlobalScore.textContent = globalScore2;
  currentScore1.textContent = roundScore;
  currentScore2.textContent = roundScore;

  holdScore.disabled = true;
  rollDice.disabled = false;

  //TO DO 
  //Désactiver le boutton HOLD en début de partie
  //hold.disable(false);
  
}

initGame();



