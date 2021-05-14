import React, { useState } from 'react';

// const diceImage = {
//     require('/img/dice-empty.png')
//     require('/img/dice1.png')
// }
const dicePath = 'img/dice3.png';
function Dice() {
  const [dice, setDice] = useState(dicePath);

  function keepRolling() {
    setDice('img/dice-empty.png');
    setTimeout(() => {
      let randomDice = Math.floor(Math.random() * (6 - 1) + 1);
      setDice(`img/dice${randomDice}.png`);
    }, 1000);
  }

  return (
    <div>
      <img onClick={keepRolling} src={dice} height="100px" alt="" />
    </div>
  );
}

export default Dice;
