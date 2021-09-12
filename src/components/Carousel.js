import React from 'react';
import './Carousel.css';

const Carousel = ({ imgList }) => {
  const [state, setState] = React.useState(0);

  return (
    <div className="carousel-container">
      <img src={imgList[state]} alt="carousel" />
      <button
        onClick={() => setState(state - 1 < 0 ? imgList.length - 1 : state - 1)}
        className="button-one"
      >
        {' '}
        {'<'}{' '}
      </button>
      <button
        onClick={() => setState(state + 1 > imgList.length - 1 ? 0 : state + 1)}
        className="button-two"
      >
        {' '}
        {'>'}{' '}
      </button>
    </div>
  );
};

export default Carousel;
