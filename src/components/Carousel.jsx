import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Left</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button onClick={handleNextClick}>Right</button>
    </div>
  );
};

export default Carousel;