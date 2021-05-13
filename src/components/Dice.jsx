import React from 'react';
import '../App.css';

function Dice() {
  let random = Math.floor(Math.random() * 6) + 1;
  const [diceNumber, setDiceNumber] = React.useState(random);

  const diceClicked = () => {
    setTimeout(function () {
      setDiceNumber('-empty');
    }, 1);
    setTimeout(function () {
      setDiceNumber(random);
    }, 1000);
  };

  return (
    <div>
      <img src={`/img/dice${diceNumber}.png`} onClick={diceClicked}></img>
    </div>
  );
}

export default Dice;
