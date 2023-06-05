import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  const [picture, setPicture] = useState(props.img);
  function changeImage() {
    setPicture(props.toggleImg);
  }
  return <img src={picture} alt="img" onClick={changeImage} />;
}

export default ClickablePicture;
