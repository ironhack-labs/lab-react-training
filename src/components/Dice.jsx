import { useState } from "react";

const Dice = () => {
  const imageBasePath = "src/assets/images/";
  const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

  const [diceImage, setDiceImage] = useState(`${imageBasePath}dice1.png`);
  const [diceState, setDiceState] = useState("");

  const rollDice = () => {
    setDiceState(); 
    setDiceImage(`${imageBasePath}dice-empty.png`);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDiceState(3); 
      setDiceImage(`${imageBasePath}${diceImages[randomNumber - 1]}`);
    }, 1000);
  };
   return (
    <div>
      <p><b>Tira los dados</b></p>
      <img
        src={diceImage}
        alt="Dice"
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
        onClick={rollDice}
      />
    </div>
  );
};

export default Dice