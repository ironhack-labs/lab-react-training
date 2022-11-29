import { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function previousImage() {
    imageIndex >= 1
      ? setImageIndex(imageIndex - 1)
      : setImageIndex(images.length - 1);
  }
  function nextImage() {
    imageIndex < images.length - 1
      ? setImageIndex(imageIndex + 1)
      : setImageIndex(0);
  }

  return (
    <div>
      <button onClick={previousImage}>Left</button>
      <img src={images[imageIndex]} alt="" />
      <button onClick={nextImage}>Right</button>
    </div>
  );
};

export default Carousel;
