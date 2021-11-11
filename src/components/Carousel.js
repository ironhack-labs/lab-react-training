import React, { useState } from 'react';

function Carousel(props) {
  const [counter, setCounter] = useState(4);

  function rightArrow() {
    setCounter((counter + 1) % props.imgs.length);
  }

  function leftArrow() {
    setCounter((counter - 1) % props.imgs.length);
  }

  return (
    <div>
      <img src={props.imgs[counter]} alt="" />
      <br />
      <button onClick={leftArrow}>Go Left</button>
      <button onClick={rightArrow}>Go Right</button>
    </div>
  );
}

export default Carousel;
