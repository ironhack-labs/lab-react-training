import React, { useState } from 'react';

function Carousel({ imgs }) {
  let [index, setIndex] = useState(0);

  const handleBack = () => {
    if (index === 0) {
      index = 4;
    }
    index--;
    setIndex(index);
  };
  const handleForward = () => {
    if (index === 3) {
      index = -1;
    }
    index++;
    setIndex(index);
  };

  return (
    <div style={{ width: '800px', display: 'flex' }}>
      <div
        style={{
          cursor: 'pointer',
          backgroundColor: 'aliceblue',
          width: '200px',
          height: '300px',
        }}
        onClick={handleBack}
      ></div>
      <div>
        <img
          style={{ width: '400px', height: '300px' }}
          src={imgs[index]}
          alt="image"
        />
      </div>
      <div
        style={{
          cursor: 'pointer',
          backgroundColor: 'red',
          width: '200px',
          height: '300px',
        }}
        onClick={handleForward}
      ></div>
    </div>
  );
}

export default Carousel;
