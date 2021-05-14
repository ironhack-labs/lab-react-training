import React from 'react';
import diceEmpty from '../dice img/dice-empty.png';
import dice1 from '../dice img/dice1.png';
import dice2 from '../dice img/dice2.png';
import dice3 from '../dice img/dice3.png';
import dice4 from '../dice img/dice4.png';
import dice5 from '../dice img/dice5.png';
import dice6 from '../dice img/dice6.png';

export default function Dice() {
  const [randomDice, setRandomDice] = React.useState(3);

  function rollDice() {
    setRandomDice(0);

    const randomNum = Math.round(Math.random() * (6 - 1) + 1);

    setTimeout(() => {
      setRandomDice(randomNum);
    }, 1000);
    return randomNum;
  }
  return (
    <div>
      {randomDice === 0 && (
        <img style={{ height: '150px' }} src="../img/dice-empty.png" />
      )}

      <a onClick={rollDice}>
        {randomDice === 1 && (
          <img style={{ height: '150px' }} src="../img/dice1.png" />
        )}
        {randomDice === 2 && (
          <img style={{ height: '150px' }} src="../img/dice2.png" />
        )}
        {randomDice === 3 && (
          <img style={{ height: '150px' }} src="../img/dice3.png" />
        )}
        {randomDice === 4 && (
          <img style={{ height: '150px' }} src="../img/dice4.png" />
        )}
        {randomDice === 5 && (
          <img style={{ height: '150px' }} src="../img/dice5.png" />
        )}
        {randomDice === 6 && (
          <img style={{ height: '150px' }} src="../img/dice6.png" />
        )}
      </a>
    </div>
  );
}
