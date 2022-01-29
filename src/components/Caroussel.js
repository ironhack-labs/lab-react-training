import React, { useState } from 'react';

const Caroussel = ({ images }) => {

  const [count, setCount] = useState(0)

  const toTheLeft = () => {
    if (count <= 0) {
      const endArray = images.length - 1;
      return setCount(endArray);
    }
    return setCount(prevCount => prevCount - 1)
  }

  const toTheRight = () => {
    if (count >= images.length - 1) {
      const begArray = 0;
      return setCount(begArray);
    }
    return setCount(prevCount => prevCount + 1)
  }
 
  return (
    <>
      <button
        onClick={() => toTheLeft()}
      >Left</button>
      <img src={images[count]} />
      <button
        onClick={() => toTheRight()}>
        Right</button>
    </>
  );
};

export default Caroussel;
