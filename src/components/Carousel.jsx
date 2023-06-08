import { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  return (
    <div>
      <h1>Carousel</h1>
      <button
        onClick={() => {
          setImage(image - 1);
        }}
      >
        ←
      </button>
      <img src={images[image]} alt={images[image]}></img>
      <button
        onClick={() => {
          setImage(image + 1);
        }}
      >
        →
      </button>
    </div>
  );
}

export default Carousel;
