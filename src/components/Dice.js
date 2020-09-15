import React, { useState } from 'react';

function Dice() {
  let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
  const [image, setImage] = useState(`img/dice${randomNumber}.png`);

  const changeImg = () => {
    setImage(`img/dice-empty.png`);
    randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    setTimeout(() => {
      setImage(`img/dice${randomNumber}.png`);
    }, 1000);
  };

  return (
    <div>
      <img
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={changeImg}
        src={image}
      ></img>
    </div>
  );
}

export default Dice;
