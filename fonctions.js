// Affichage du bon dé / Fonction à inclure dans un autre fichier
export function displayDice(diceNumber){
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
