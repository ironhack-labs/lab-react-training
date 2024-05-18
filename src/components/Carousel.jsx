import { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const goRight = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ margin: '20px' }}>
        <button onClick={goLeft}>&lt; Left</button>
        <img src={images[currentIndex]} alt="carousel" style={{ width: '300px', height: '200px', margin: '0 15px' }} />
        <button onClick={goRight}>Right &gt;</button>
      </div>
    </div>
  );
};

export default Carousel;