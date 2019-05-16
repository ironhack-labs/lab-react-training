import React, { useState } from "react";
import { randNumber } from "../helpers/functions";

const randDice = number => `img/dice${number}.png`;

const Dice = () => {
  const [diceFace, setdiceFace] = useState(randDice(randNumber(1,6)));
  return (
    <div>
      <img onClick={()=>{
        setdiceFace("img/dice-empty.png")
        setTimeout(() => {
          setdiceFace(randDice(randNumber(1,6)))
        }, 1000);
      }} className="image is-96x96" src={diceFace} alt="dice"/>
    </div>
  );
};

export default Dice;
