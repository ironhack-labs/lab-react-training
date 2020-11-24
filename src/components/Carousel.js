import React, { useState } from 'react';

export default function Carousel(props) {
  let [arrayNum, setArrayNum] = useState(2);

  const clickLeft = () => {
    if (arrayNum === 0) {
      setArrayNum((arrayNum = 0));
    } else {
      setArrayNum(arrayNum--);
    }
  };

  const clickRight = () => {
    if (arrayNum === props.imgs.length - 1) {
      setArrayNum((arrayNum = props.imgs.length - 1));
    } else {
      setArrayNum(arrayNum++);
    }
  };

  return (
    <div className="carousel">
      <img src={props.imgs[arrayNum]} alt="carousel image" />
      <div className="buttonDiv">
        <button onClick={clickLeft}>Left</button>
        <button onClick={clickRight}>Right</button>
      </div>
    </div>
  );
}
