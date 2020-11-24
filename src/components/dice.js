import React, { useState } from 'react';

export default function Dice() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  let [src, setSrc] = useState(`/img/dice${getRandomNumber()}.png`);

  const handleClick = () => {
    setTimeout(function () {
      setSrc((src = `/img/dice${getRandomNumber()}.png`));
    }, 1000);
    setSrc((src = `/img/dice-empty.png`));
  };

  return (
    <div className="dice" onClick={handleClick}>
      <img onClick={handleClick} src={src} alt="dice" />
    </div>
  );
}
