import { React, useState } from 'react';

const Dice = ({ face0, face1, face2, face3, face4, face5, face6 }) => {
  const faces = [face1, face2, face3, face4, face5, face6];
  const [diceImage, setDiceImage] = useState(face0);

  const handleClick = () => {
    setDiceImage(face0);
    setTimeout(() => {
      return setDiceImage(faces[Math.floor(Math.random() * faces.length)]);
    }, 1000);
  };

  return (
    <div>
      <img src={diceImage} onClick={handleClick} style={{ width: '200px' }} />
    </div>
  );
};

export default Dice;
