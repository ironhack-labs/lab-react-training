import { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleImageIndex(direction) {
    if (direction === 'back') {
      if (currentImageIndex <= 0) {
        setCurrentImageIndex(images.length - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }

    if (direction === 'forward') {
      if (currentImageIndex >= images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  }

  return (
    <div className="carousel">
      <div>
        <img src={images[currentImageIndex]} alt="carousel pic" />
      </div>
      <div>
        <button onClick={() => handleImageIndex('back')}>Back</button>
        <button onClick={() => handleImageIndex('forward')}>Forward</button>
      </div>
    </div>
  );
}

export default Carousel;
