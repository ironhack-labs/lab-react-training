import React from 'react';
import '../App.css';

function Carousel(props) {
  const { imgs } = props;
  let i = 0;
  const [image, setImage] = React.useState(imgs[i]);

  function clickLeft() {
    console.log('Current index: ', i);
    i <= 0 ? (i = 3) : i--;
    console.log('New index: ', i);
    let newImage = imgs[i];
    setImage(newImage);
  }

  function clickRight() {
    console.log('Current index: ', i);
    i >= 3 ? (i = 0) : i++;
    console.log('New index: ', i);
    let newImage = imgs[i];
    setImage(newImage);
  }

  return (
    <div>
      <button onClick={clickLeft}>Left</button>
      <img src={image} alt="Picture of a person"></img>
      <button onClick={clickRight}>Right</button>
    </div>
  );
}

export default Carousel;
