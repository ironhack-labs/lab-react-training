import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      {index > 0 && <button onClick={() => setIndex(index - 1)}>Left</button>}
      <img src={images[index]} alt="carousel" />
      {index < images.length - 1 && (
        <button onClick={() => setIndex(index + 1)}>Right</button>
      )}
    </div>
  );
};

export default Carousel;
