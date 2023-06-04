import React from 'react';
import { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  const leftClick = () => {
    setImage(image - 1);
  };
  const rightClick = () => {
    setImage(image + 1);
  };
  return (
    <div className="carousel">
      <button onClick={leftClick}>Left</button>
      <img src={images[image]} alt="" />
      <button onClick={rightClick}>Right</button>
    </div>
  );
}

export default Carousel;
