import { useState } from 'react';
import empty from './assets/images/dice-empty.png';
import one from './assets/images/dice1.png';
import two from './assets/images/dice2.png';
import three from './assets/images/dice3.png';
import four from './assets/images/dice4.png';
import five from './assets/images/dice5.png';
import six from './assets/images/dice6.png';

function Dice() {
  const [state, setState] = useState(0);

  const dices = [empty, one, two, three, four, five, six];

  function rollDice(event) {
    setState(0);
    setTimeout(() => {
      const rand = Math.floor(Math.random() * (7 - 1) + 1);
      setState(rand);
    }, 1000);
  }

  return <img src={dices[state]} onClick={rollDice}></img>;
}

export default Dice;
