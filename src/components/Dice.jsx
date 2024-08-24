import { useState } from "react";

function Dice() {
  const diceImages = [
    "../assets/images/dice1.png",
    "../assets/images/dice2.png",
    "../assets/images/dice3.png",
    "../assets/images/dice4.png",
    "../assets/images/dice5.png",
    "../assets/images/dice6.png",
  ];

  const [currentDice, setCurrentDice] = useState(getRandomDiceImage());

  function getRandomDiceImage() {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
  }

  const handleClick = () => {
    setCurrentDice("../assets/images/dice-empty.png");

    setTimeout(() => {
      setCurrentDice(getRandomDiceImage());
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Dice;
