import React from 'react';

function Carousel(props) {
  const [index, setIndex] = React.useState(0);

  if (index < 0) {
    setIndex(0);
  }

  if (index > 3) {
    setIndex(3);
  }

  const previousImage = () => {
    setIndex(index - 1);
  };

  const nextImage = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <button onClick={previousImage}>back</button>
      <img src={props.imgs[index]}></img>
      <button onClick={nextImage}>next</button>
    </div>
  );
}

export default Carousel;
