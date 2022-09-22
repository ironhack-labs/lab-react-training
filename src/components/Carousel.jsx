import { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  function clickLeft() {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  }

  function clickRight() {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  }

  return (
    <div style={{ margin: '1rem auto 3rem' }}>
      <button
        onClick={clickLeft}
        style={{ color: '#F65A83', cursor: 'pointer' }}
      >
        ◀
      </button>
      <img src={images[index]} alt="carousel" width="250px" />
      <button
        onClick={clickRight}
        style={{ color: '#F65A83', cursor: 'pointer' }}
      >
        ▶
      </button>
    </div>
  );
}

export default Carousel;
