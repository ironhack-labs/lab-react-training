import { useState } from "react";

export default function Carusel({ images }) {
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
    <div className="carousel flex flex-col items-center">
      <img src={images[currentIndex]} className="mb-4" width={250} />
      <div className="flex space-x-4">
        <button
          onClick={handleLeftClick}
          className="btn-left px-4 py-2 bg-blue-500 text-white rounded"
        >
          Izquierda
        </button>
        <button
          onClick={handleRightClick}
          className="btn-right px-4 py-2 bg-blue-500 text-white rounded"
        >
          Derecha
        </button>
      </div>
    </div>
  );
}
