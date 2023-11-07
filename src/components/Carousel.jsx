import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt={`Carousel Image ${currentImageIndex + 1}`} />

      <div className="controls">
        <button onClick={handlePrevClick}>Left</button>
        <button onClick={handleNextClick}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
