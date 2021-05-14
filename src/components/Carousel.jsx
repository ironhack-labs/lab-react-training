import React, { useState } from 'react';

function Carousel() {
  const [carousel, setCarousel] = useState('');
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];
  //   function handleCarousel(event) {
  //     setCarousel(event.target.value);
  //   }

  //   function handleClick(event) {
  //     event.preventDefault();

  //     props.setCarousel(carousel);
  //   }
  const left = () => {
    setCarousel(carousel - 1);
    if (carousel === 0) {
      setCarousel(3);
    }
  };

  const right = () => {
    setCarousel(carousel + 1);
    if (carousel === images.length - 1) {
      setCarousel(0);
    }
  };

  return (
    <div>
      <button onClick={left}>Left</button>

      <img src={images[carousel]} />

      <button onClick={right}>Right</button>
    </div>
  );
}

export default Carousel;
