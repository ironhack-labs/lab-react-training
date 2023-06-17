import React from 'react';

function Carousel(props) {
  const [index, setIndex] = React.useState(0);

  return (
    <div id="carousel">
      <img src={props.images[index]} alt="" />
      <div id="carouselBtns">
        <button
          className="carouselBtn"
          onClick={() => {
            setIndex((index + 1) % props.images.length);
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            setIndex((index - 1 + props.images.length) % props.images.length);
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default Carousel;
