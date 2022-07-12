import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <>
      <img
        src={toggle ? props.imgClicked : props.img}
        alt={props.alt}
        onClick={handleToggle}
        style={{
          borderRadius: '99%',
          width: '300px',
          height: '300px',
          display: 'flex',
          margin: '0 auto',
        }}
      />
    </>
  );
}

export default ClickablePicture;
