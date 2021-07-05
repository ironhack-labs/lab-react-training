import { useState } from 'react';

const Carousel = ({ imgs }) => {
  const [idx, setIdx] = useState(0);
  const handleClickLeft = () => {
    setIdx(idx < imgs.length - 1 ? idx + 1 : 0);
  };
  const handleClickRight = () => {
    setIdx(idx > 0 ? idx - 1 : imgs.length - 1);
  };
  return (
    <div>
      <img src={imgs[idx]} alt="carousel image" />
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
};

export default Carousel;
