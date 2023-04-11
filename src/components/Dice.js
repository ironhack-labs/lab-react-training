import { useState } from 'react';

function Dice() {
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * 6) + 1 //começa o dado com um numero randomico
  );
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);
      setDiceNumber(0);
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber);
        setIsRolling(false);
      }, 1000);
    }
  };

  return (
    <div className="dice" onClick={rollDice}>
      {isRolling ? (
        <img src="img/dice0.png" alt="Rolling dice" width={150} />
      ) : (
        <img src={`img/dice${diceNumber}.png`} alt="dice value" width={150} />
      )}
    </div>
  );
}

export default Dice;
