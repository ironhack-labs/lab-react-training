import { useState } from 'react';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handleLeftClick}>left</button>
      <img src={images[currentImageIndex]} alt="carousel" />
      <button onClick={handleRightClick}>right</button>
    </div>
  );
}

export default Carousel;
