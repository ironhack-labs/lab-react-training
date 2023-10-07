/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const handleNext = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrevious = () => {
    setCurrentImg((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="d-flex justify-content-center">
      <button onClick={handlePrevious}>Left</button>
      <img src={images[currentImg]} alt={`Image ${currentImg}`} />
      <button onClick={handleNext}>Right</button>
    </div>
  );
};

export default Carousel;
