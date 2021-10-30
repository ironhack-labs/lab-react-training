import React, { useState } from 'react';

function ClickablePicture(props) {
  console.log(props);
  const [img, setImg] = useState(props.img);

  function toggleImg() {
    if (img === props.img) {
      setImg(props.imgClicked);
    } else {
      setImg(props.img);
    }
  }
  return <img onClick={toggleImg} src={img} />;
}

export default ClickablePicture;
