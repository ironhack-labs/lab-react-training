import React from 'react';
import Dice1 from '../images/dice1.png';
import Dice2 from '../images/dice2.png';
import Dice3 from '../images/dice3.png';
import Dice4 from '../images/dice4.png';
import Dice5 from '../images/dice5.png';
import Dice6 from '../images/dice6.png';

function Dice({ dice, setDice, diceEmpty }) {
  function changeDice() {
    console.log('dice clicked');
    setDice(diceEmpty);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      switch (randomNumber) {
        case 1:
          setDice(Dice1);
          break;
        case 2:
          setDice(Dice2);
          break;
        case 3:
          setDice(Dice3);
          break;
        case 4:
          setDice(Dice4);
          break;
        case 5:
          setDice(Dice5);
          break;
        case 6:
          setDice(Dice6);
          break;
        default:
          setDice(diceEmpty);
      }
    }, 1000);
  }

  return (
    <div>
      <img className="img" src={dice} alt="dice" onClick={changeDice} />
    </div>
  );
}

export default Dice;
