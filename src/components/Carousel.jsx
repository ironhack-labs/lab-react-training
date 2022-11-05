import { useState } from 'react';

function Carousel({ images }) {
  const [imageNo, setImageNo] = useState(images[0]);

  const handlePrevClick = () => {
    if (images.indexOf(imageNo) === 0) {
      setImageNo(images[3]);
    } else setImageNo(images[images.indexOf(imageNo) - 1]);
  };

  const handleNextClick = () => {
    if (images.indexOf(imageNo) === images.length - 1) {
      setImageNo(images[0]);
    } else setImageNo(images[images.indexOf(imageNo) + 1]);
  };

  return (
    <div className="image-container">
      <img src={imageNo} alt="img" />
      <button
        onClick={() => handlePrevClick()}
        className="image-btn left"
      ></button>
      <button
        onClick={() => handleNextClick()}
        className="image-btn right"
      ></button>
    </div>
  );
}
export default Carousel;
