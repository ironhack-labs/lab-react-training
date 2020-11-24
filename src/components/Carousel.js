import React, { useState } from 'react';
import { ImgStyled } from './styles/index';

const Carousel = ({ imgs }) => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((counter += 1))}>Prev</button>
      <ImgStyled src={imgs[Math.abs(~~(counter % imgs.length))]} />
      <button onClick={() => setCounter((counter -= 1))}>Next</button>
    </div>
  );
};

export default Carousel;
