import React, { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex(index + 1);
  }

  function handlePrevious() {
    setIndex(index - 1);
  }

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;
