import React from 'react';
import { useState } from 'react';

export default function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(true);
  function handleClick() {
    setImage(!image);
  }

  return (
    <img onClick={handleClick} src={image ? img : imgClicked} height="200px" />
  );
}
