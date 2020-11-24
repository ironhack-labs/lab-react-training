import React, { useState } from 'react';
import { ImgStyled } from './styles/index';

const Dice = () => {
  const [bgImg, setBgImg] = useState('/img/dice3.png');

  return (
    <ImgStyled
      onClick={() => {
        setBgImg('/img/dice-empty.png');
        setTimeout(
          () => setBgImg(`/img/dice${~~(Math.random() * 6) + 1}.png`),
          1000
        );
      }}
      src={bgImg}
    />
  );
};

export default Dice;
