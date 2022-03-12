import img from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';
import { useState } from 'react';

function ClickablePicture() {
  let [picture, setPicture] = useState(img);

  function handleClick(event) {
    if (picture === img) {
      setPicture(imgClicked);
    } else {
      setPicture(img);
    }
  }

  return <img onClick={handleClick} src={picture} alt="foto" />;
}

export default ClickablePicture;
