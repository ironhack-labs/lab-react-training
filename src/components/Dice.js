import React, { useState } from 'react';
const emptyDice = '/img/dice-empty.png';
function randomNumber(max = 6, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createDiceUrl() {
  const diceFace = randomNumber();
  //setDicePicture(`/img/dice${diceFace}.png`);
  return '/img/dice' + diceFace + '.png';
}
function Dice() {
  const [dicePicture, setDicePicture] = useState(createDiceUrl());
  const [isRolling, setIsRolling] = useState(false);
  function ruleTheDice() {
    if (isRolling) {
      return;
    }
    setDicePicture(emptyDice);
    setIsRolling(true);
    setTimeout(() => {
      // const diceFace = randomNumber();
      //setDicePicture(`/img/dice${diceFace}.png`);
      setDicePicture(createDiceUrl());
      setIsRolling(false);
    }, 1000);
  }
  return (
    <div>
      <img onClick={ruleTheDice} src={dicePicture} height="200px" alt="" />
    </div>
  );
}
export default Dice;
