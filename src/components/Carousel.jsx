import { useState } from 'react';

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const left = () => {
    if (imageIndex <= 0) setImageIndex((prevIndex) => images.length - 1);
    else setImageIndex((prevIndex) => prevIndex - 1);
  };

  const right = () => {
    if (imageIndex === images.length - 1) setImageIndex(0);
    else setImageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <button onClick={left} style={{ padding: '10px' }}>
        Left
      </button>
      <img src={images[imageIndex]} alt="images" />
      <button onClick={right} style={{ padding: '10px' }}>
        Right
      </button>
    </div>
  );
};

export default Carousel;
