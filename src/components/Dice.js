import { useState } from 'react';

const Dice = () => {
  const [die, setDie] = useState(2);

  const handleClick = (e) => {
    e.preventDefault();
    const rand = Math.floor(Math.random() * 5) + 1;

    setDie('-empty');

    setTimeout(() => {
      setDie(rand);
    }, 1000);
  };

  return <img alt="dice" src={`/img/dice${die}.png`} onClick={handleClick} />;
};

export default Dice;
