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
    <div>
      <button onClick={leftBtn}>left</button>
      <img src={image} alt="some" />
      <button onClick={rightBtn}>right</button>
    </div>
  );
};
