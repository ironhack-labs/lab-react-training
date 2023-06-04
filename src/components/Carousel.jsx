import { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  const showPrevImage = () => {
    setImage(image - 1);
  };
  const showNextImage = () => {
    setImage(image + 1);
  };
  return (
    <div>
      <h1>Carousel</h1>
      <button onClick={showPrevImage}>←</button>
      <img src={images[image]} alt={images[image]}></img>
      <button onClick={showNextImage}>→</button>
    </div>
  );
}

export default Carousel;
