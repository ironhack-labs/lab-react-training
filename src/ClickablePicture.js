import { useState } from 'react';
import image from './assets/images/maxence.png';

function ClickablePicture(props) {
  const [state, setState] = useState(false);

  function toggleImg(event) {
    setState(!state);
  }

  if (!state) {
    return <img src={props.img} onClick={toggleImg} />;
  } else {
    return <img src={props.imgClicked} onClick={toggleImg} />;
  }
}

export default ClickablePicture;
