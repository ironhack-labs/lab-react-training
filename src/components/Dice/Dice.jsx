import React, { useState } from 'react';

const Dice = () => {
  const initialState = {
    number: 3,
  };
  const diceSides = [
    '/img/dice-empty.png',
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  const [state, setState] = useState(initialState);

  const randomDiceNumber = () => {
    return Math.round(Math.random() * (6 - 1) + 1);
  };

  const handleClick = () => {
    if (state.number) {
      setState(() => ({
        number: 0,
      }));
      setTimeout(() => {
        setState((state) => ({
          number: randomDiceNumber(),
        }));
      }, 1000);
    }
  };

  return (
    <div>
      <img className="dado" src={diceSides[state.number]} alt="Dice" onClick={handleClick} />
    </div>
  );
};

export default Dice;
