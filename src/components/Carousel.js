import React from 'react';
import { useState } from 'react';

export const Carousel = ({ carousel }) => {
  const [image, setImage] = useState(carousel[0]);

  const rightBtn = () => {
    const newImg = carousel[carousel.indexOf(image) + 1];

    carousel.indexOf(image) === carousel.length - 1
      ? setImage(carousel[0])
      : setImage(newImg);
  };

  const leftBtn = () => {
    const newImg = carousel[carousel.indexOf(image) - 1];
    !carousel.indexOf(image)
      ? setImage(carousel[carousel.length - 1])
      : setImage(newImg);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={leftBtn}
        style={{ width: '50px', backgroundColor: 'lightgreen' }}
      >
        Left
      </button>
      <img src={image} alt="some" style={{ width: '300px' }} />
      <button
        onClick={rightBtn}
        style={{ width: '50px', backgroundColor: 'lightgreen' }}
      >
        Right
      </button>
    </div>
  );
};
