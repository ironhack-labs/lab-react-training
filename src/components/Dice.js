import React, { useState } from 'react';
import dice from '../assets/dice-empty.png'

export default function Dice() {
  const zero = require('../assets/dice-empty.png')
  const one = require('../assets/dice1.png')
  const two = require('../assets/dice2.png')
  const three = require('../assets/dice3.png')
  const four = require('../assets/dice4.png')
  const five = require('../assets/dice5.png')
  const six = require('../assets/dice6.png')
  
  const [image, setImage] = useState(dice);

  const handleOnClick = () => {
    setImage(dice);
    let num = () => {
        const rand = Math.ceil(Math.random() * 6)
        switch (rand) {
          case 1:
            setImage(one);
            break;
          case 2:
            setImage(two);
            break;
          case 3:
            setImage(three);
            break;
          case 4:
            setImage(four);
            break;
          case 5:
            setImage(five);
            break;
          case 6:
            setImage(six);
            break;
        }
    }
    setTimeout(num, 1000);
    
  };

  return (
    <div>
      <img src={image} alt="dice" onClick={handleOnClick} style={{width: '100px'}} />
    </div>
  );
}
