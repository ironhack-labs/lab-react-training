import React, { useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const imgLength = images.length;

  const nextImg = () => {
    setCurrentImage(currentImage === imgLength - 1 ? 0 : currentImage + 1);
  };

  const prevImg = () => {
    setCurrentImage(currentImage === 0 ? imgLength - 1 : currentImage + 1);
  };

  return (
    <div>
      <button onClick={prevImg}>Left</button>
      <img src={images[currentImage]} alt="prof-img" />
      <button onClick={nextImg}>Right</button>
    </div>
  );
};

export default Carousel;
