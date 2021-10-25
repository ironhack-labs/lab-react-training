import React, { useState } from 'react';

function ClickablePicture(props) {
  console.log(props);
  const [toggle, setToggle] = useState(true);
  console.log(toggle);

  function switchToggle() {
    if (toggle === true) {
      setToggle(false);
      console.log(toggle);
    } else {
      setToggle(true);
    }
  }

  return (
    <div>
      <img
        onClick={switchToggle}
        src={toggle ? props.img : props.imgClicked}
        alt=""
      />
    </div>
  );
}

export default ClickablePicture;
