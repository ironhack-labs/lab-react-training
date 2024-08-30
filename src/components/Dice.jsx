import { useState } from 'react';

function Dice() {
  const diceImages = [
    '../assets/images/dice1.png',
    '../assets/images/dice2.png',
    '../assets/images/dice3.png',
    '../assets/images/dice4.png',
    '../assets/images/dice5.png',
    '../assets/images/dice6.png'
  ];
  const [currentImage, setCurrentImage] = useState(diceImages[0]);
  const handleDiceClick = () => {
    setCurrentImage('../assets/images/dice-empty.png');
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentImage(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div>
      <img 
        src={currentImage} 
        alt="dice" 
        onClick={handleDiceClick} 
        style={{ width: '100px', height: '100px', cursor: 'pointer' }}
      />
    </div>
  );
}

export default Dice;
