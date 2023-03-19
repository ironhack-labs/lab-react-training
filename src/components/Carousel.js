import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  const image = images[index];

  return (
    <div>
      <img src={image} alt='carousel' className="w-[480px] px-4" />
      <div className="flex px-4">
        <button onClick={handleLeftClick} className="bg-blue-500 text-white px-7 py-2 m-2 rounded-lg">Left</button>
        <button onClick={handleRightClick} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-lg">Right</button>
      </div>
    </div>
  );
};

export default Carousel;
