import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

export const Dice = () => {
 const diceImgArray = [dice1, dice2, dice3, dice4, dice5, dice6];

 const [state, setState] = useState(0);
 const [imgChange, setImgChange] = useState(diceImgArray[0]);
 // console.log('state: ', state);

 const diceDelay = () => {
   setTimeout(() => {
     setState(state + Math.floor(Math.random() * 6 + 1));
     setImgChange(diceImgArray[state % diceImgArray.length]);
   }, 1000);
 };

 const emptyDiceDelay = () => {
   setTimeout(() => {
     setState(0);
     setImgChange(diceEmpty);
   }, 10);
 };

 return (
   <div>
     <img alt="Dice"
       style={{ width: '180px' }}
       src={imgChange}
       onClick={() => {
         emptyDiceDelay();
         diceDelay();
       }}
     />
   </div>
 );
}
