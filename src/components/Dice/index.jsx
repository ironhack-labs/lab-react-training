import { useState } from 'react';

function Dice() {
const [diceValue, setDiceValue] = useState(null);

const rollDice = () => {
    setDiceValue(null);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    }, 1000);
};

const diceImage = diceValue
    ? `/images/dice${diceValue}.png`
    : '/images/dice-empty.png';

return (
    <img
    src={diceImage}
    alt="dice"
    style={{ width: '200px', height: '200px', cursor: 'pointer' }}
    onClick={rollDice}
    />
);
}

export default Dice;
