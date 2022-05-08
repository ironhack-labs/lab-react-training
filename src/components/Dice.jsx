import { useState } from 'react';

import diceEmpty from '../assets/images/dice-empty.png';

import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';

const Dice = () => {
  // const [dice, setDice] = useState();
  const [show, setShow] = useState(true);
  const [image, setImage] = useState(false);

  const setClick = () => {
    setShow(!show);
    setInterval(() => {
      setShow(null);
      setImage(<img src={diceSix} alt="Dice Six"></img>);
    }, 1000);
  };

  return (
    <div onClick={setClick}>
      {show ? (
        <img src={diceThree} alt="Dice Three" />
      ) : (
        <img src={diceEmpty} alt="Dice Empty" />
      )}

      {image}
    </div>
  );
};
export default Dice;
