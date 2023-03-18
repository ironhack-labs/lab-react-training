import { useState } from 'react';
import dice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
function Dice() {
  const [src, setSrc] = useState(dice);

  const dicePicker = () => {
    setSrc(dice);
    const randomNumber = Math.floor(Math.random() * (6 - 0) + 0);
    setTimeout(() => setSrc(diceImages[randomNumber]), 500);
  };

  return (
    <div className="pl-6">
      <img src={src} alt="dice" onClick={dicePicker} className="w-25" />
    </div>
  );
}

export default Dice;
