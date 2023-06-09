import React, { useState } from "react";

function Carousel(props) {
  const {images} = props
  let [index, setIndex] = useState(0);

  function increaseButton() {
    if (index <= 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function decreaseButton() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  }

  return (
    <div>
      <img src={images[index]} alt="img" />
      <button onClick={decreaseButton}>Left</button>
      

      <button onClick={increaseButton}>Right</button>
    </div>
  );
}

export default Carousel;