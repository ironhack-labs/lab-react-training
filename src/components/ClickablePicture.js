import React, { useState } from 'react';

const ClickablePicture = (props) => {
  let displayedImg = props.img;
  const [stateImage, setStateImage] = useState(displayedImg);
  const changeHandler = () => {
    stateImage === props.img
      ? setStateImage(props.imgClicked)
      : setStateImage(props.img);
  };
  return <img src={stateImage} alt="Random guy" onClick={changeHandler} />;
};

export default ClickablePicture;
