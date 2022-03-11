import { useState } from 'react';
import image from './assets/images/maxence.png';

function ClickablePicture(props) {
  const [state, setState] = useState(false);

  function toggleImg(event) {
    setState(!state);
  }

  return <img src={state ? props.imgClicked : props.img} onClick={toggleImg} />;
}

export default ClickablePicture;
