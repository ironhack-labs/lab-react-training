import diceEmpty from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice-empty.png';
import dice1 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice1.png';
import dice2 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice2.png';
import dice3 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice3.png';
import dice4 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice4.png';
import dice5 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice5.png';
import dice6 from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/dice6.png';
import { useState } from 'react';
import { useEffect } from 'react';

function Dice() {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];
  const randomNum = Math.floor(Math.random() * diceArr.length);
  const [img, setImg] = useState([diceArr[randomNum]]);

  function handleClick() {
    setImg(diceArr[diceArr.length - 1]);
    setTimeout(() => {
      setImg(diceArr[randomNum]);
    }, 1000);
  }

  return (
    <div>
      <img src={img} onClick={() => handleClick()} alt="dice3" width="50px" />
    </div>
  );
}

export default Dice;
