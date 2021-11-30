import React from 'react';
import { useState } from 'react';

export const Carousel = ({ imgs }) => {
  const [imgIdx, setImgIdx] = useState(0);

  const goLeft = () =>
    setImgIdx((imgIdx) => {
      const newIdx = imgIdx - 1;
      return newIdx < 0 ? newIdx + imgs.length : newIdx;
    });
  const goRight = () => setImgIdx((imgIdx) => (imgIdx + 1) % imgs.length);

  return (
    <div>
      <img src={imgs[imgIdx]} alt="" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={goLeft}>Left</button>
        <button onClick={goRight}>Right</button>
      </div>
    </div>
  );
};
