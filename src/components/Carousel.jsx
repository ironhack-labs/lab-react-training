import { useState } from "react";

const Carousel = () => {
  const imageUrls = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container d-flex column align-items-end">
        <div>
            <button onClick={handleLeftClick}>
            &lt; Left
            </button>
        </div>
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
        style={{ width: "100%", height: "auto" }}
      />
      <div>
        <button onClick={handleRightClick}>
          Right &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
