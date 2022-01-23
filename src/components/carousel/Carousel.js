import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const {images} = props;
  //console.log(images)
  //let src = ``;

  const [currentPosition, setCurrentPosition] = React.useState(0);

 let currentImage = images[currentPosition]

  const rightClick = () => {
    console.log(images.length)
    console.log(currentPosition)
    console.log(currentImage)
    // images.length - 1 => 3
    currentPosition !== images.length -1 
      ? setCurrentPosition(currentPosition +1)
      : setCurrentPosition(0)
    //console.log('hello right')
    //setDisplayImg(images[+1])
  }

  const leftClick = () => {
    currentPosition !== 0 
      ? setCurrentPosition(currentPosition -1)
      : setCurrentPosition(images.length -1);
  }

  return (
    <>
      <h1>Carousel</h1>
      <button onClick={leftClick} className="left">Left</button>
      <img src={currentImage} alt="" />
      <button onClick={rightClick} className="right">Right</button>
    </>
  )
}

export default Carousel;
