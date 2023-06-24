import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import '../App.css'


function Dice() {
    const [diceValue, setDiceValue] = useState(0);

    const handleClick = () => {
        setDiceValue(0); // Display empty dice image first
    
        setTimeout(() => {
          const randomValue = Math.floor(Math.random() * 6) + 1;
          setDiceValue(randomValue);
        }, 1000);
      };

      const getImageSource = () => {
        switch (diceValue) {
          case 1:
            return dice1;
          case 2:
            return dice2;
          case 3:
            return dice3;
          case 4:
            return dice4;
          case 5:
            return dice5;
          case 6:
            return dice6;
          default:
            return emptyDice;
        }
      };
    
  return (
    <div>
         <img src={getImageSource()} alt="Dice" onClick={handleClick} style={{ cursor: 'pointer' }} className='dice' />
    </div>
  )
}

export default Dice