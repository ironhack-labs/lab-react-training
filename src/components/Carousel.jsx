import { useState } from 'react';

function Carousel({ images }) {
  const [imageNum, setImage] = useState(0);

  const showPrevImg = () => {
    setImage(imageNum - 1);
  };
  const showNextImg = () => {
    setImage(imageNum + 1);
  };

  return (
    <article className="carousel">
      <img src={images[imageNum % images.length]} alt="" />
      <div className="grid">
        <button onClick={showPrevImg}>←</button>
        <button onClick={showNextImg}>→</button>
      </div>
    </article>
  );
}

export default Carousel;
