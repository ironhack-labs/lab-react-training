import React, { useState } from 'react';

function Carousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    if (props.images && props.images.length > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : props.images.length - 1);
    }
  };

  const handleRightClick = () => {
    if (props.images && props.images.length > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex < props.images.length - 1 ? prevIndex + 1 : 0);
    }
  };

  return (
    <div>
      {props.images && props.images.length > 0 && (
        <img src={props.images[currentImageIndex]} alt="Carousel" />
      )}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;

