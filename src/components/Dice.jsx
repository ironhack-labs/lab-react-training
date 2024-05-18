import  { useState } from 'react';


import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [diceSrc, setDiceSrc] = useState(diceEmpty);

  const rollDice = () => {
    
    setDiceSrc(diceEmpty);

    setTimeout(() => {
      
      const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
      setDiceSrc(randomDice);
    }, 1000);
  };

  return (
    <div onClick={rollDice} style={{ cursor: 'pointer' }}>
      <img src={diceSrc} alt="Dice" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default Dice;