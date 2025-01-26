import { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [position, usePosition] = useState(0);

  const rightClick = () => {
    usePosition((prevPosition) => (prevPosition === 3 ? 0 : prevPosition + 1));
  };

  const leftClick = () => {
    usePosition((prevPosition) => 
      prevPosition === 0 ? 3 : prevPosition - 1
    );
  };

  return (
    <div className="Carousel">
      <div>
        <button className="buttons-divs" onClick={leftClick}>
          Left
        </button>
      </div>
      <img src={images[position]} alt="" />
      <div>
        <button className="buttons-divs" onClick={rightClick}>
          Right
        </button>
      </div>
    </div>
  );
}

export default Carousel;
