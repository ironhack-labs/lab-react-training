import React from 'react';
import { useState } from 'react';

function ClickablePicture({ img, toggleImg }) {
  function changePicture(e) {
    let displayImage = document.getElementById('img1');
    // console.log(displayImage)

    if (displayImage.src.match(img)) {
      displayImage.src = toggleImg;
    } else {
      displayImage.src = img;
    }
  }

  return <img id="img1" onClick={changePicture} src={img} alt="img" />;
}

export default ClickablePicture;
