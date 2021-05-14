import React, { useState } from 'react';

function ClickablePicture(props) {
  const [state, setState] = useState(false);
  function imageClick() {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  }
  return (
    <img
      onClick={imageClick}
      src={state ? props.imgClicked : props.img}
      alt="toughLife"
      height="100px"
    />
  );
}

export default ClickablePicture;
