import { useState } from "react";

function Dice() {
  const ramdomizer = `dice${Math.floor(Math.random() * 6) + 1}`;
  const [dice, setDice] = useState(ramdomizer);
  
  const changeDice = () => {
    setDice("dice-empty");
    setTimeout(() => {
      setDice(ramdomizer);
    }, 1000);
  };

  return (
    <div>
      <img
        onClick={changeDice}
        src={`src/assets/images/${dice}.png`}
        width="200"
        alt=""
      />
    </div>
  );
}

export default Dice;
