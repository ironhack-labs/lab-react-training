import React, {useState} from 'react';

const Dice = () => {

  const [randomNumber, setRandomNumber] = useState(3);

  const rollTheDice = () => {

    setRandomNumber(0);
    
    let rolling = Math.floor((Math.random() * 6) + 1);

    setTimeout(() => { 
      setRandomNumber(rolling);
    }, 1000);

    return randomNumber;
  }

  return (
    <div>
        {randomNumber === 0 && <img src="../img/dice-empty.png" style={{height: "100px"}} />}
        
      <a onClick={rollTheDice}>
        {randomNumber === 1 && <img src="../img/dice1.png" style={{height: "100px"}} />}
        {randomNumber === 2 && <img src="../img/dice2.png" style={{height: "100px"}} />}
        {randomNumber === 3 && <img src="../img/dice3.png" style={{height: "100px"}} />}
        {randomNumber === 4 && <img src="../img/dice4.png" style={{height: "100px"}} />}
        {randomNumber === 5 && <img src="../img/dice5.png" style={{height: "100px"}} />}
        {randomNumber === 6 && <img src="../img/dice6.png" style={{height: "100px"}} />}
      </a>
    </div>
  )
}

export default Dice;
