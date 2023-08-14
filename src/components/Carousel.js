import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={goToNext}>Right</button>
    </div>
  );
};

export default Carousel;
