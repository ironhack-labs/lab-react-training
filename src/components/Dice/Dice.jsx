import { useState } from "react";

const Dice = () => {
  const [diceImg, setDiceImg] = useState("dice-empty.png");
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;
    setDiceImg("dice-empty.png");
    setRolling(true);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceImg(`dice${randomValue}.png`);
      setRolling(false);
    }, 1000);
  };

  return (
    <>
      <img
        src={`/dice-images/${diceImg}`}
        style={{ height: "100px" }}
        alt="Dice"
        onClick={rollDice}
      />
    </>
  );
};

export default Dice;
