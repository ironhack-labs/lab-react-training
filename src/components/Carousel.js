import { useState } from 'react';

function Carousel({ images }) {
  const [carouselValue, setCarouselValue] = useState(0);
  //if carouselValue is bigger than 0, setCarouselValue -1, if not, set it to value 3 (restarting the carousel)
  const left = () => {
    carouselValue > 0
      ? setCarouselValue(carouselValue - 1)
      : setCarouselValue(3);
  };
  //if carouselValue is lesser than 0, setCarouselValue +1, if not, set it to value 0 (restarting the carousel)
  const right = () => {
    carouselValue < 3
      ? setCarouselValue(carouselValue + 1)
      : setCarouselValue(0);
  };
  return (
    <section>
      <button onClick={left}>Left</button>
      <img src={images[carouselValue]} alt="carousel" />
      <button onClick={right}>Right</button>
    </section>
  );
}

export default Carousel;
