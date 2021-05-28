import React, { useState } from 'react';

export const Dice = () => {
  const dados = [
    '/img/dice-empty.png',
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice4.png',
    '/img/dice3.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];

  const [numero, setnumero] = useState(0);
  return (
    <div className="mt-5">
      <img
        src={dados[numero]}
        alt=""
        className="randomImagen"
        onClick={() => setnumero(Math.floor(Math.random() * (6 - 0) + 0))}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};