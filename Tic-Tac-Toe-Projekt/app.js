const gameField = 

    ["", "", "",
     "", "", "", 
     "", "", ""];

let player = "X";

// Zugang zu den Spielfeldern auf der HTML Seite
const clickOnField = window.document.querySelectorAll("li");
for (let i = 0; i < clickOnField.length; i++) {
  clickOnField[i].addEventListener("click", () => {
    
      playerOnClick(i);
})

}

function playerOnClick(i) {
    
    if (gameField[i] === "") {
        gameField[i] = player;
        clickOnField[i].textContent = player;
        let bool =  playerWin();

        if (bool) {
            const label = window.document.createElement('label');
            const divTag = window.document.querySelector('header');
            label.textContent = `${gameField[i]} hat gewonnen`;
            divTag.appendChild(label)

            setTimeout(() => {
                resetGame(bool);},1000);
        }
        anotherPlayer()       
    }
    else {
        alert(`Feld bereits besetzt von ${gameField[i]}`);
        }      
}

function anotherPlayer() {
    if (player === 'O') {
        player = 'X';
    }
    else {
        player = 'O';
    }
}

function playerWin() {
  if (
    gameField[0] === player && gameField[1] === player && gameField[2] === player
) {
    alert(`${player} hat gewonnen`);
   return true;
  }

  if (
    gameField[3] === player && gameField[4] === player && gameField[5] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true;
  }

  if (
    gameField[6] === player && gameField[7] === player && gameField[8] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
}

  if (
    gameField[0] === player && gameField[3] === player && gameField[6] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
  }

  if (
    gameField[1] === player && gameField[4] === player && gameField[7] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
  }

  if (
    gameField[2] === player && gameField[5] === player && gameField[8] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
  }

  if (
    gameField[0] === player && gameField[4] === player && gameField[8] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
  }

  if (
    gameField[2] === player && gameField[4] === player && gameField[6] === player
  ) {
    alert(`${player} hat gewonnen`);
    return true; 
  }
}

function resetGame(bool) {
    if(bool) {

        clickOnField.forEach((cell,index) => { cell.textContent=''; gameField[index] =''
    
        } );
    }
}
