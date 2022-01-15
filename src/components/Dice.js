import classes from './Dice.module.css';

import { useState, useEffect, useRef } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';

const Dice = () => {
  const [dice, setDice] = useState(0);
  const [click, setClick] = useState(false);
  let dices = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];
  let imgSrc = dices[dice];
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      console.log('useEffect');
    }, 1000);
    return () => clearTimeout(timer);
  }, [click]);

  const clickHandler = () => {
    setDice(0);
    setClick((click) => !click);
    console.log(dice);
  };

  return (
    <img
      src={imgSrc}
      alt="dice"
      onClick={clickHandler}
      className={classes.dice}
    />
  );
};

export default Dice;
