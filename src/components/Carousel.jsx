import { useState, useEffect } from 'react';

export default function Carousel(props) {
  const { images } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftButton = function () {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(props.images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  const handleRightButton = function () {
    if (currentImageIndex === props.images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="" />
      <div>
        <button onClick={handleLeftButton}>Left</button>
        <button onClick={handleRightButton}>Right</button>
      </div>
    </div>
  );
}
