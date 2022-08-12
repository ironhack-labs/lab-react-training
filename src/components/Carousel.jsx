import  { useState } from 'react';

import React from 'react'

export default function Carousel({images}) {
    const[currentImage, setCurrentImage] = useState(0);
   /*  if currentImage is bigger than 0, then setCurrentImage to -1, if not :
    setCurrentImage to 3(restarting the carousel) */
    const leftClick = () => {
        currentImage > 0 
        ? setCurrentImage(currentImage - 1) 
        : setCurrentImage(images.length - 1);
    }
    /* if  currentImage is lesser than 0, setCurrentImage +1, if not :
    set it to 0(restarting the carousel*/
    const rightClick = () => {
        currentImage < (images.length - 1)
        ? setCurrentImage(currentImage + 1) 
        : setCurrentImage(0);
    }

  return (
    <div className="carousel">
        <button onClick={leftClick}>Left</button>
        <img src={images[currentImage]}  alt="Carousel" />
        <button onClick={rightClick}>Right</button>
    </div>
  )
}


