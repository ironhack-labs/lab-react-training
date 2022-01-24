import React from 'react';
import './Carousel.css';
const Carousel = ({ images }) => {
  const [count, setCount] = React.useState(0);

  const handleChangeNext = () => {
    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handleChangeBefore = () => {
    if (count === 0) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="Carousel">
      <button className="button is-dark" onClick={handleChangeBefore}>⇦</button>
      <img src={images[count]} alt="potrait" />
      <button className="button is-dark" onClick={handleChangeNext}>
        ⇨
      </button>
    </div>
  );
};

export default Carousel;
