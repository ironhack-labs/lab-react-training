import React from 'react';

function Dice() {
  const [randomDice, setRundomDice] = React.useState(3);

  function rollDice() {
    setRundomDice(0);

    const rollingDice = Math.floor(Math.random() * 6 + 1);

    setTimeout(() => {
      setRundomDice(rollingDice);
    }, 1000);
    return randomDice;
  }

  return (
    <div>
      {randomDice === 0 && (
        <img className="RollingDice" src="../img/dice-empty.png" />
      )}

      <a onClick={rollDice}>
        {randomDice === 1 && (
          <img className="RollingDice" src="../img/dice1.png" />
        )}
        {randomDice === 2 && (
          <img className="RollingDice" src="../img/dice2.png" />
        )}
        {randomDice === 3 && (
          <img className="RollingDice" src="../img/dice3.png" />
        )}
        {randomDice === 4 && (
          <img className="RollingDice" src="../img/dice4.png" />
        )}
        {randomDice === 5 && (
          <img className="RollingDice" src="../img/dice5.png" />
        )}
        {randomDice === 6 && (
          <img className="RollingDice" src="../img/dice6.png" />
        )}
      </a>
    </div>
  );
}

export default Dice;
