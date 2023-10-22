/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Carousel({ images }) {
  const [Index, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[Index]} alt={`Image ${Index + 1}`} />

      <div className="carousel-buttons">
        <button onClick={handlePrevClick}>Left</button>
        <button onClick={handleNextClick}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;