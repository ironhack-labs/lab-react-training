import React from 'react';
import './Dice.css';

export function Dice({ dicePictures, diceZero }) {
  const [diceState, setDiceState] = React.useState(diceZero);

const SetTimeDice = () => setInterval(function () {
    let randomDice =
      dicePictures[Math.floor(Math.random() * dicePictures.length)];
    setDiceState(randomDice);
  }, 1500);

  return (
    <div>
      <img className="dice-size" onClick={SetTimeDice} src={diceState} alt="dice"/>
    </div>
  );
}
