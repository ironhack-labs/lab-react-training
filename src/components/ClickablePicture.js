import { useState } from 'react';
import React from 'react';
function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);
  const toggle = () => {
    setImage(image === img ? imgClicked : img);
  };
  return <img onClick={toggle} src={image} />;
}

export default ClickablePicture;
