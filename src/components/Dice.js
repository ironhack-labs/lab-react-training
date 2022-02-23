import React from 'react'
import { useState } from 'react';
import empty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

import './Dice.css'


function Dice() {

    const [image, setImage] = useState(empty)

    const setRandomImage = () => {
        setImage(empty)
        setTimeout(() => {
            const arrDices = [dice1, dice2, dice3, dice4, dice5, dice6];
            const max = arrDices.length;
            const min = 0;

            const random = Math.floor(Math.random() * (max - min) + min);
            const randomImage = arrDices[random];
            setImage(randomImage)
        }, 1000)

    }

  return (
    <div className='dice'> 
      <img src={image} alt="dice" onClick={() => setRandomImage() }/>
    </div>
  );
}

export default Dice