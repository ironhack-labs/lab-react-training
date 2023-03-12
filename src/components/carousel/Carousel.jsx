import { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [imgPosition, setImgPosition] = useState(0);

  const handleNextImg = () => {
    imgPosition < 3 ? setImgPosition((prev) => prev + 1) : setImgPosition(0);
  };

  const handlePrevImg = () => {
    imgPosition === 0 ? setImgPosition(3) : setImgPosition((prev) => prev - 1);
  };

  return (
    <div className="carousel-container">
      <img src={images[imgPosition]} alt="carousel" />
      <div className="btns">
        <button onClick={handlePrevImg}>Prev</button>
        <button onClick={handleNextImg}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
