import React, { useState } from 'react';

function ClickablePicture(props) {
  const [imgSrc, setImgSrc] = useState(props.img);
  const toggleImgSrc = () => {
    setImgSrc(imgSrc === props.img ? props.imgClicked : props.img);
  };
  return (
    <img className="ClickablePicture" onClick={toggleImgSrc} alt="picture" src={imgSrc}/>
  );
}

export default ClickablePicture;
