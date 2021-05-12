import React from 'react';

export default function Dice() {
  const [state, setState] = React.useState(0);

  function randomdice() {
    setState(0);
    setTimeout(() => {
      let randomNumber = Math.round(Math.random() * (6 - 1) + 1);
      setState(randomNumber);
    }, 600);
  }

  let diceImg = {
    0: '/img/dice-empty.png',
    1: '/img/dice1.png',
    2: '/img/dice2.png',
    3: '/img/dice3.png',
    4: '/img/dice4.png',
    5: '/img/dice5.png',
    6: '/img/dice6.png',
  };

  return (
    <img
      onClick={randomdice}
      src={diceImg[state]}
      alt="dice"
      style={{ cursor: 'pointer' }}
    />
  );
}
