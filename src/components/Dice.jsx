import { useState } from "react";

export default function Dice() {
  const [dice, setDice] = useState(`dice${Math.floor(Math.random() * 6) + 1}`);

  const changeDice = () => {
    setDice(`dice-empty`);
    setTimeout(() => {
      setDice(`dice${Math.floor(Math.random() * 6) + 1}`);
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <img
          onClick={changeDice}
          src={`src/assets/images/${dice}.png`}
          alt="dice"
          width="100"
          height="100"
        />
      </div>
    </>
  );
}
