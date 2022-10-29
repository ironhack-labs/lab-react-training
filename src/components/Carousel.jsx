import { useState } from 'react';

function Carousel({ images }) {
  const [imageNo, setImageNo] = useState(images[0]);

  const skipZeroUndefined = (imageNo) => {
    if (images.indexOf(imageNo) === 0) {
      setImageNo(images[3]);
    } else setImageNo(images[images.indexOf(imageNo) - 1]);
  };

  const skipUpperUndefined = (imageNo) => {
    if (images.indexOf(imageNo) === images.length - 1) {
      setImageNo(images[0]);
    } else setImageNo(images[images.indexOf(imageNo) + 1]);
  };

  const handlePrevClick = () => {
    skipZeroUndefined(imageNo);
  };

  const handleNextClick = () => {
    skipUpperUndefined(imageNo);
  };

  return (
    <div className="image-container">
      <img style={{ width: '100%' }} src={imageNo} alt="img" />
      <button onClick={() => handlePrevClick()} className="image-btn left">
        &lt;
      </button>
      <button onClick={() => handleNextClick()} className="image-btn right">
        &gt;
      </button>
    </div>
  );
}
export default Carousel;
