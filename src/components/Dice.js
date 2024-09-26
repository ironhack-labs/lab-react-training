import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import oneDice from '../assets/images/dice1.png';
import twoDice from '../assets/images/dice2.png';
import threeDice from '../assets/images/dice3.png';
import fourDice from '../assets/images/dice4.png';
import fiveDice from '../assets/images/dice5.png';
import sixDice from '../assets/images/dice6.png';

function Dice() {
  const [dice, setDice] = useState(emptyDice);
  return (
    <div>
      <img
        src={dice}
        alt="dice"
        className="dice"
        onClick={() => {
          const randomDice = Math.trunc(Math.random() * 6);

          if (randomDice === 1) {
            setDice(oneDice);
          } else if (randomDice === 2) {
            setDice(twoDice);
          } else if (randomDice === 3) {
            setDice(threeDice);
          } else if (randomDice === 4) {
            setDice(fourDice);
          } else if (randomDice === 5) {
            setDice(fiveDice);
          } else if (randomDice === 6) {
            setDice(sixDice);
          }
        }}
      ></img>
    </div>
  );
}

export default Dice;
