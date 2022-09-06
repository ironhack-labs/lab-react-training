import React, { useState } from 'react';

function Carousel(props) {
  const [ imageIndex, setImageIndex ] = useState(0);
  const imagesNum = props.images.length;
  const nextImage = (step) => {
    if (step < 0 && imageIndex === 0)
      setImageIndex(imagesNum - 1);
    else if (step > 0 && imageIndex === imagesNum - 1)
      setImageIndex(0);
    else
      setImageIndex(imageIndex + step);
  };
  return (
    <div className="Carousel">
      <button onClick={() => nextImage(-1)}>Left</button>
      <img alt="carousel picture" src={props.images[imageIndex]}/>
      <button onClick={() => nextImage(+1)}>Right</button>
    </div>
  );
}

export default Carousel;
