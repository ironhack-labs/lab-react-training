import { useState } from "react";
import propTypes from "prop-types";

function Carousel({ images}) {

    const [currentImage, setCurrentImage] = useState(0);

    const handleLeftClick = () => {
      setCurrentImage((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }
    const handleRightClick = () => {
      setCurrentImage((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handleLeftClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Left
      </button>
      <img
        src={images[currentImage]}
        alt="carousel"
        className="w-48 h-48 object-cover rounded shadow-lg"
      />
      <button
        onClick={handleRightClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Right
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Carousel