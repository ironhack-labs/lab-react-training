import { useState } from "react";

import Dice0 from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

const diceArray = [
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6
];


function Dice () {

    const [dice, setDice] = useState (0)

      function random () {
        
      const diceRandom = diceArray[Math.floor(Math.random()* diceArray.length)];
      setDice(Dice0);
      setTimeout(() => setDice(diceRandom) , 1000);
      };


    return (
      <div>
        <img src={diceArray[dice]} onClick={random} alt="dice" width="150"/>
      </div>
    )
}
  


export default Dice;