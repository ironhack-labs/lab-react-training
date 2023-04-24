import { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      return;
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <button onClick={handleBack} className="mx-2">
        BACK
      </button>

      <img
        src={images[index]}
        className="my-3"
        style={{ maxWidth: '600px' }}
        alt="carousel"
      />

      <button onClick={handleNext} className="mx-2">
        NEXT
      </button>
    </div>
  );
};

export default Carousel;
