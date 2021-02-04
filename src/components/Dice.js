import React, { useState } from 'react';
import '../css/App.css';

export default function Dice({ img }) {
  const [pic, setPic] = useState('empty');

  if (pic === 'empty') {
    //Cargue de condiciones iniciales
    setPic(img);
  }

  function lanzarDado() {
    const initialDice = '/img/dice-empty.png';
    setPic(initialDice);
    const dice = Math.ceil(Math.random() * 6);
    let showDice = `/img/dice${dice}.png`;
    setTimeout(() => {
      setPic(showDice);
    }, 1000);
  }

  return (
    <div className="picCont">
      <img src={pic} onClick={lanzarDado} />
    </div>
  );
}
