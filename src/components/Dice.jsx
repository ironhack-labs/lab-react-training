import { useState } from 'react';

function Dice() {
  const [randomDice, setRandomDice] = useState('3');

  const handleClick = () => {
    setRandomDice('-empty');

    setTimeout(() => {
      setRandomDice(Math.floor(Math.random() * 6));
    }, 1000);
  };

  return (
    <div>
      <img
        className="w-25"
        onClick={handleClick}
        src={require(`../assets/images/dice${randomDice}.png`)}
        alt="Dado"
      />
    </div>
  );
}

export default Dice;
