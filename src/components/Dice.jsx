import React from 'react';

function Dice() {
  const [dice, setDice] = React.useState('3');

  const handleClick = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    setDice('-empty');
    setTimeout(() => {
      setDice(randomDice);
    }, 1000);
    return dice;
  };
  return (
    <div>
      <img
        style={{ width: '200px' }}
        onClick={() => handleClick()}
        src={`/img/dice${dice}.png`}
      />
    </div>
  );
}

export default Dice;
