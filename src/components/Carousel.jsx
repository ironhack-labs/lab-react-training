import { useState } from 'react';

function Carousel(props) {
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrIndex((index) =>
      index === 0 ? props.images.length - 1 : index - 1
    );
  };

  const handleNextClick = () => {
    setCurrIndex((index) =>
      index === props.images.length - 1 ? props.images[0] : index + 1
    );
  };

  return (
    <div className="carousel">
      <img src={props.images[currIndex]} alt="" />
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Carousel;
