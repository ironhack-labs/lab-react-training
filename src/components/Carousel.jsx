import React, { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  const [imgIndex, setImgIndex] = useState(0);

  function nextImg() {
    setImgIndex((imgIndex + 1) % images.length);
  }
  function previousImg() {
    setImgIndex((imgIndex - 1 + images.length) % images.length);
  }

  return (
    <div>
      <button onClick={previousImg}>Left</button>
      <img src={images[imgIndex]} alt="img"></img>
      <button onClick={nextImg}>Right</button>
    </div>
  );
}

export default Carousel;
