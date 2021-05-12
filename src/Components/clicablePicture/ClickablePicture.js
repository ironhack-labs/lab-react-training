import React from 'react';

export default function ClickablePicture(props) {
  const [state, setState] = React.useState(false);

  function imageClick() {
    state === true ? setState(false) : setState(true);
  }

  return (
    <img
      className="clickable"
      onClick={imageClick}
      src={state ? props.imgClicked : props.img}
      alt="toughLife"
      style={{ cursor: 'pointer' }}
    />
  );
}
