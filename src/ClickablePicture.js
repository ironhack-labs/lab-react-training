import React, { useState } from 'react';

function ClickablePicture(props) {
  let [image, setImage] = useState(props.img);

  const toggle = () => {
    image === props.img ? setImage(props.imgClicked) : setImage(props.img);
    //console.log(image); //debug
  };

  return (
    <div>
      <img onClick={toggle} src={image} style={{ width: '10vw' }} alt="" />
    </div>
  );
}

export default ClickablePicture;
