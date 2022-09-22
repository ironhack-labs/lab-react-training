import React, { useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const { images } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgArrayLength = images.length;

  const nextImg = () => {
    setCurrentImageIndex(
      currentImageIndex === imgArrayLength - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImg = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imgArrayLength - 1 : currentImageIndex - 1
    );
  };

  return (
    <div>
      <button onClick={prevImg}>Left</button>
      <img src={images[currentImageIndex]} alt="prof-img" />
      <button onClick={nextImg}>Right</button>
    </div>
  );
};

export default Carousel;
