import React, { useState } from 'react';

function CarouselHook({ imgs }) {
  const [imgNumber, setImgNumber] = useState(0);

  const handleNextImg = () => {
    setImgNumber((imgNumber + 1) % 4);
  };

  const handlePreviousImg = () => {
    setImgNumber((imgNumber - 1 < 0 ? 3 : imgNumber - 1) % 4);
  };

  return (
    <div>
      <div>
        <img src={imgs[imgNumber]} alt="carousel" />
        <button onClick={handleNextImg}>to the left</button>
        <button onClick={handlePreviousImg}>to the right</button>
      </div>
    </div>
  );
}

export default CarouselHook;
