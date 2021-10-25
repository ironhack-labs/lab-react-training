import React, { useState } from 'react';

function ClickablePicture(props) {
  console.log(props);
  const [toggle, setToggle] = useState(true);
  console.log(toggle);

  function switchToggle() {
    if (toggle === true) {
      setToggle(false);
      <img onClick={switchToggle} src={props.imgClicked} alt="" />;
      console.log(toggle);
    } else {
      setToggle(true);
    }
  }

  return (
    <div>
      <img onClick={switchToggle} src={props.img} alt="" />
    </div>
  );
}

export default ClickablePicture;
