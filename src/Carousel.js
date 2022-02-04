import { useState } from 'react';

const Carousel = ({ images }) => {
  const [imgNum, setImgNum] = useState(0);

  const carouselClickHandler = ({ target }) => {
    const max = images.length - 1;
    if (imgNum === max && target.id === 'right') {
      setImgNum(0);
    } else if (imgNum === 0 && target.id === 'left') {
      setImgNum(max);
    } else if (target.id === 'left') {
      setImgNum((imgNum) => imgNum - 1);
    } else if (target.id === 'right') {
      setImgNum((imgNum) => imgNum + 1);
    }
    console.log(target.id);
  };
  return (
    <div>
      <button type="button" id="left" onClick={carouselClickHandler}>
        Left
      </button>
      <img src={images[imgNum]} alt="carousel" />
      <button type="button" id="right" onClick={carouselClickHandler}>
        Right
      </button>
    </div>
  );
};

export default Carousel;