import React from 'react';
import { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);


  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
      if(index < images.length - 1) {
        setIndex(index + 1)
      }
  };
  
  return (
    <div className="carousel">
      <button onClick={() => prev()}>〈</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={() => next()}>〉</button>
    </div>
  );
}

export default Carousel;
