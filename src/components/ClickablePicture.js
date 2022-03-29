import React from 'react';
import { useState } from 'react';

export const ClickablePicture = ({ img, imgClicked }) => {
  const [picture, setPicture] = useState(img);

  const changePic = () => {
    picture !== img ? setPicture(img) : setPicture(imgClicked);
  };

  return (
    <div>
      <img src={picture} alt="whitoutglasses" onClick={changePic} />
    </div>
  );
};
