import React, { useState } from 'react';
import './Dice.css';


const Dice = () => {
  const [showDice, changeDice] = useState('/img/dice-empty.png');

  const style = {
    cursor: 'pointer'
  }

  return (
    <img style={style} src={showDice} alt='clickable Dice'
      onClick={() => { changeDice('/img/dice-empty.png');
       const randomDiceToShow = Math.floor(Math.random() * 5)
        setTimeout(() => changeDice(`/img/dice${randomDiceToShow}.png`), 1000);
      }} />
  );
}


export default Dice;