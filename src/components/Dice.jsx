import { useState } from 'react';
let isClicked = false;

function Dice() {
  const imgLinks = [
    'images/dice-empty.png',
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png',
  ];

  const [diceImgLink, setDiceImgLink] = useState(imgLinks[0]);

  const rollDice = () => {
    if (isClicked === false) {
      // set switch
      isClicked = true;
      // set empty dice
      setDiceImgLink(imgLinks[0]);
      // find random index
      const randDiceIndex = Math.ceil(Math.random() * (imgLinks.length - 1));
      let newDiceImg = imgLinks[randDiceIndex];
      // set timeout new dice img
      const rollDiceTimeout = setTimeout(() => {
        setDiceImgLink(newDiceImg);
        clearTimeout(rollDiceTimeout);
        isClicked = false;
      }, 1000);
    }
  };

  return (
    // <img src="../assets/images/dice-empty.png" alt="" className="dice-image" />
    <img
      src={diceImgLink}
      alt=""
      onClick={() => {
        rollDice(isClicked);
      }}
      className="dice-image"
    />
  );
}

export default Dice;
