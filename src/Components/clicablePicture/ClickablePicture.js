import React from 'react';

export default function ClickablePicture(props) {
  const [state, setState] = React.useState(false);

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
    />
  );
}
