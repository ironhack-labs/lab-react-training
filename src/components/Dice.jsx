import { useState } from 'react';

import dice0 from '../assets//images/dice-empty.png';
import dice1 from '../assets//images/dice1.png';
import dice2 from '../assets//images/dice2.png';
import dice3 from '../assets//images/dice3.png';
import dice4 from '../assets//images/dice4.png';
import dice5 from '../assets//images/dice5.png';
import dice6 from '../assets//images/dice6.png';

const dices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [diceValue, setDiceValue] = useState(0);

  const handleClick = () => {
    // montrer une image de dés vide
    setDiceValue(0);

    // changer le dés de manière random après 1sec
    setTimeout(() => {
      const randValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randValue);
    }, 1000);
  };

  return (
    <div>
      <img width="100" src={dices[diceValue]} onClick={handleClick} />
    </div>
  );
}

export default Dice;
