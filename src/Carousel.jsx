import React from 'react';
import './Carousel.css';

function Carousel(props) {
  const { imgs } = props;
  let index = 0;

  const [photo, setPhoto] = React.useState(imgs[index]);

  const moveLeft = () => {
    index--;
    setPhoto(imgs[index]);
  };

  const moveRight = () => {
    index++;
    setPhoto(imgs[index]);
  };

  return (
    <div class="Carousel-div">
      <button onClick={moveLeft}>LEFT</button>
      <img src={photo} alt="carousel of images" />
      <button onClick={moveRight}>RIGHT</button>
    </div>
  );
}

export default Carousel;
