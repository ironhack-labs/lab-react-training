import { useState } from "react";

function Carousel({ images }) {
  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}
export default Carousel;
