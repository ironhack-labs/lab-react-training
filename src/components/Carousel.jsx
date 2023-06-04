import { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setIndex] = useState(0);
  function increase() {
    if (currentIndex < 3) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
  }
  function decrease() {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    } else {
      setIndex(3);
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Previous
      </button>
      <img src={images[currentIndex]} alt=""></img>
      <button
        onClick={() => {
          increase();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
