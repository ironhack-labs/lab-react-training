import { useState } from 'react';

function Carousel({ images }) {
  const [imgIndex, setImgIndex] = useState(0);

  const handleClick = (offset) => {
    setImgIndex((prev) => {
      const next = prev + offset;

      if (next > images.length - 1) {
        return 0;
      }
      if (next < 0) {
        return images.length - 1;
      }
      return next;
    });
  };

  return (
    <div className="">
      <button onClick={() => handleClick(-1)}>Prev</button>
      <img src={images[imgIndex]} alt="foto" />
      <button onClick={() => handleClick(1)}>Next</button>
    </div>
  );
}

export default Carousel;
