import React from 'react';
import { useState } from 'react';

import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]

function Dice () {
    
  const [dice, setDice] = useState(true);
 

  const toggleDice = () => {setDice(!dice);};
 
  let randomDice =Math.floor(Math.random()* diceArr.length )
    return (
      
    <div >
      <button onClick={toggleDice}> 
      <img src= {dice ? diceEmpty : randomDice} alt="dice"/>
      </button>
    </div>         
 );
}

export default Dice;