import { React, useState } from 'react';

const Carousel = ({ images }) => {
  const initCounter = Math.floor(Math.random() * images.length);
  const [counter, setCounter] = useState(initCounter);
  const [image, setImage] = useState(images[initCounter]);

  const handleLeft = () => {
    const newCounter = counter > 0 ? counter - 1 : images.length - 1;
    setCounter(newCounter);
    return setImage(images[newCounter]);
  };

  const handleRight = () => {
    const newCounter = counter < images.length - 1 ? counter + 1 : 0;
    setCounter(newCounter);
    return setImage(images[newCounter]);
  };

  return (
    <div className="carousel">
      <button onClick={handleLeft}>Left</button>
      <img src={image} style={{ width: '350px' }} />
      <button onClick={handleRight}>Right</button>
    </div>
  );
};

export default Carousel;
