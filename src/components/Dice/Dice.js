import React from 'react';

export default function Dice() {
  const diceImg = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];

  const diceEmpty = '/img/dice-empty.png';

  const [diceState, setDiceImg] = React.useState(getRandomDice());

  function getRandomDice  () {
    const randomIndex = Math.floor(Math.random() * diceImg.length);

    return diceImg[randomIndex];
  };

  const handleClick = () => {
    const prevState = diceState;

    if (prevState === diceEmpty) {
      setDiceImg(getRandomDice());
    } else {
      setDiceImg(diceEmpty);
    }
  };

  return <img src={diceState} alt="dice-img" onClick={handleClick} style ={{height:"100px"}}/>;
}
