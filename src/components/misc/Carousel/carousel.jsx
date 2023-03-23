import React, { useState } from "react";
import './carousel.css'

const Carousel = ({ images }) => {
  const [Image, setImage] = useState(images[0]);

  const LeftClick = () => {
    const Index = images.indexOf(Image);
    const newIndex = (Index - 1 + images.length) % images.length;
    setImage(images[newIndex]);
  };

  const RightClick = () => {
    const Index = images.indexOf(Image);
    const newIndex = (Index + 1) % images.length;
    setImage(images[newIndex]);
  };

  return (
    <div className="Carousel">
      <img src={Image} alt="Carousel" />
      <div className="button-carousel">
        <button onClick={LeftClick}>Left</button>
        <button onClick={RightClick}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
