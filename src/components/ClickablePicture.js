import React, { useState } from 'react';

const ClickablePicture = (props) => {
  let displayedImg = props.img;
  const [stateImage, setStateImage] = useState(displayedImg);
  const changeHandler = () => {
    let newImage = stateImage;
    if (stateImage === props.img) {
      newImage = props.imgClicked;
      setStateImage(newImage);
    } else {
      newImage = props.img;
      setStateImage(newImage);
    }
  };
  return <img src={stateImage} alt="" onClick={changeHandler} />;
};

export default ClickablePicture;
