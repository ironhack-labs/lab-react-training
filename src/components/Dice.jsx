import { useState } from 'react';

export default function Dice(props) {
  const [imgSrc, setImgSrc] = useState('/images/dice-empty.png');

  const handleDice = () => {
    setImgSrc('/images/dice-empty.png');
    setTimeout(() => {
      setImgSrc(`/images/dice${Math.floor(Math.random() * 6)}.png`);
    }, 1000);
  };

  return (
    <img className="dice__img" onClick={handleDice} src={imgSrc} alt="dice" />
  );
}
