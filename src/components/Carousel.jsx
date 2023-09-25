import React from 'react'
import { useState } from "react";

function Carousel({images}) {

    const [currentImgIndex, setCurrentImageIndex] = useState(0);
    const handleLeft = () => {
      if (currentImgIndex > 0) {
        setCurrentImageIndex(currentImgIndex - 1);
      } else {
        setCurrentImageIndex(images.length - 1);
      }
    };
    const handleRight = () => {
      if (currentImgIndex + 1 < images.length) {
        setCurrentImageIndex(currentImgIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    };
  return (
    <div>Carousel

<button onClick={() =>handleLeft()}>Left</button>
<img src={images[currentImgIndex]} alt="carousel"/>
<button onClick={() =>handleRight()}>Right</button>

    </div>
  )
}

export default Carousel