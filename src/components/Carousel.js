import React, { useState } from 'react';

const Carousel = (props) => {
  const images = props.imgs;
  const [allValues, setAllValues] = useState({
    index: 0,
    activeImage: images[0],
  });
  const handleChangeRight = () => {
    let newIndex = allValues.index + 1;
    let newImage = images[newIndex];
    setAllValues({
      index: newIndex,
      activeImage: newImage,
    });
  };
  const handleChangeLeft = () => {
    let newIndex = allValues.index - 1;
    let newImage = images[newIndex];
    setAllValues({
      index: newIndex,
      activeImage: newImage,
    });
  };
  return (
    <div className="wrapper">
      <img src={allValues.activeImage} alt="Selected" />
      <div className="buttons">
        <button onClick={handleChangeLeft}>
          <span className="lnr lnr-arrow-left"></span> Prev image
        </button>
        <button onClick={handleChangeRight}>
          <span className="lnr lnr-arrow-right"></span> Next image
        </button>
      </div>
    </div>
  );
};

export default Carousel;
