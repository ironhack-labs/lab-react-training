import React from 'react';
import '../App.css';

function Carousel(props) {
  const { imgs } = props;
  let indexDefault = 0;
  const [index, setIndex] = React.useState(indexDefault);

  function clickLeft() {
    let newIndex = 0;
    index === 0 ? (newIndex = 3) : (newIndex = index - 1);
    setIndex(newIndex);
  }

  function clickRight() {
    let newIndex = 0;
    index === 3 ? (newIndex = 0) : (newIndex = index + 1);
    setIndex(newIndex);
  }

  return (
    <div>
      <button onClick={clickLeft}>Left</button>
      <img src={imgs[index]} alt="Picture of a person"></img>
      <button onClick={clickRight}>Right</button>
    </div>
  );
}

export default Carousel;
