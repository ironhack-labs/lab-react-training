import { useState } from 'react';

function Dice() {
  const diceArray = [
    '/images/dice-empty.png',
    '/images/dice1.png',
    '/images/dice2.png',
    '/images/dice3.png',
    '/images/dice4.png',
    '/images/dice5.png',
    '/images/dice6.png',
  ];

  const [diceNum, setDice] = useState(diceArray[0]);

  const getRandomDice = () => {
    const randomDice = Math.floor(Math.random() * diceArray.length - 1) + 1;
    return diceArray[randomDice];
  };

  const rollDice = () => {
    setTimeout(() => {
      setDice(getRandomDice());
    }, 1000);
  };

  return (
    <div>
      <h1>Roll the Dice</h1>
      <img
        src={diceNum}
        alt="dice-empty"
        style={{
          width: '150px',
          height: '150px',
          cursor: 'pointer',
        }}
        onClick={rollDice}
      ></img>
    </div>
  );
}

export default Dice;
