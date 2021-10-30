import React, { useState } from 'react';

function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);
  function toggleImg() {
    if (img === props.img) {
      setImg(props.imgClicked);
    } else {
      setImg(props.img);
    }
  }
  return <img onClick={toggleImg} src={img} alt="" />;
}

export default ClickablePicture;
