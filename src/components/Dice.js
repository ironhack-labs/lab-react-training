import React from 'react';
import '../App.css';

function Dice() {
  const [diceNumber, setDiceNumber] = React.useState('/img/dice-empty.png');

  function resetTheDice() {
    let dicePicture = 'img/dice-empty.png';
    setDiceNumber(dicePicture);
  }

  function rollTheDice() {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    let dicePicture = `/img/dice${diceRoll}.png`;
    const timer = setTimeout(() => {
      setDiceNumber(dicePicture);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function diceRoll() {
    resetTheDice();
    rollTheDice();
  }

  return (
    <div>
      <img
        src={diceNumber}
        style={{ height: 100, width: 100 }}
        alt="Dice roll result"
        onClick={diceRoll}
      ></img>
    </div>
  );
}

export default Dice;
