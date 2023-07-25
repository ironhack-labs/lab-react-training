import { useState } from 'react';
import React from 'react';

function Carousel(props) {
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrIndex(index => (index === 0 ? props.images.length - 1 : index - 1));
  };

  const handleNextClick = () => {
    setCurrIndex(index => (index === props.images.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="carousel">
      <img src={props.images[currIndex]} alt="" />
      <div className="btn-wrapper">
        <button onClick={handlePrevClick}>PREV</button>
        <button onClick={handleNextClick}>NEXT</button>
      </div>
    </div>
  );
}

export default Carousel;
