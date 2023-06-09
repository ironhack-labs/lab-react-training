import React, { useState } from 'react';

function Carousel({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
  return (
    <div className="carousel">
              <button onClick={handlePrevClick}>Left</button>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={handleNextClick}>Right</button>
    </div>
  )
}

export default Carousel