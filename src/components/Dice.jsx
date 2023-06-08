import React, { useEffect, useState } from 'react';
import empty from '../assets/images/dice-empty.png';
import d1 from '../assets/images/dice1.png';
import d2 from '../assets/images/dice2.png';
import d3 from '../assets/images/dice3.png';
import d4 from '../assets/images/dice4.png';
import d5 from '../assets/images/dice5.png';
import d6 from '../assets/images/dice6.png';

function Dice() {
  const [dice, setDice] = useState(empty);
  const allDice = [d1, d2, d3, d4, d5, d6];
  const [start, setStart] = useState(false)
  useEffect(() => {
    let interval
    if(start){ interval = setInterval(() => {
        const random = Math.floor(Math.random() * 6);
        setDice(allDice[random]);
      }, 1000);}
    
    return () => {
      clearInterval(interval);
    };
  },[start]);

  return (
    <div style={{ margin: '20px' }}>
      <img width="100px" src={dice} alt="0" onClick={()=>{setStart(!start)}}/>
    </div>
  );
}

export default Dice;
