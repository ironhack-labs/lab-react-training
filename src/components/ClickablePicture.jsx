import React from 'react';

function ClickablePicture(props) {
  const [picture, setPicture] = React.useState('false');

  const handleClick = () => setPicture(!picture);

  return (
    <div>
      <img
        onClick={handleClick}
        src={!picture ? props.imgClicked : props.img}
        alt="max"
      />
    </div>
  );
}

export default ClickablePicture;
