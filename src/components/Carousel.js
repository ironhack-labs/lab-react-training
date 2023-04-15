import React, { useState } from 'react';

function Carousel(props) {
  const [index, setIndex] = useState(0);
  const { images } = props;

  const handleClickPrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleClickNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="Carousel">
      <button onClick={handleClickPrev}>Left</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={handleClickNext}>Right</button>
    </div>
  );
}

export default Carousel;
