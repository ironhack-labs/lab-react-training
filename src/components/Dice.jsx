import React from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice(props) {
  const imgUrl = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
  const [index, setIndex] = React.useState(0);
  const randomIndex = Math.floor(Math.random() * imgUrl.length);

  return (
    <img
      className="dice"
      src={imgUrl[index]}
      alt=""
      onClick={() => {
        setTimeout(() => {
          setIndex(randomIndex);
        }, 1000);
      }}
    />
  );
}

export default Dice;
