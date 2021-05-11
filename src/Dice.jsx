import React from 'react';
import './Dice.css';

const diceImages = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
];

function Dice() {
  const randomNumber = () => Math.floor(Math.random() * diceImages.length);
  const newDice = diceImages[randomNumber()];
  const [diceImage, setDiceImage] = React.useState(newDice);

  const randomDice = () => setDiceImage(newDice);

  return (
    <div class="Dice">
      <img src={diceImage} onClick={randomDice} alt="not found" />
    </div>
  );
}

export default Dice;
