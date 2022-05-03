import { useState } from 'react';
const imgArr = [
  '/images/dice1.png',
  '/images/dice2.png',
  '/images/dice3.png',
  '/images/dice4.png',
  '/images/dice5.png',
  '/images/dice6.png',
];
const emptyDice = '/images/dice-empty.png';

const Dice = () => {
  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * imgArr.length);
    
      let randomDice = imgArr[randomNumber];
      
      return randomDice; 
  };

  const [initialImage, setInitialImage] = useState(rollDice());

  const changeImg = () => {
      setInitialImage(emptyDice);
      setTimeout(() => {
          setInitialImage(rollDice())
          
      }, 1000)
  };

  return (
    <button>
      <img
        src={initialImage}
        alt="photo"
        onClick={changeImg}
      />
    </button>
  );
};

export default Dice;
