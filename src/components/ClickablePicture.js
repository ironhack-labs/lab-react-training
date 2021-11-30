import React, { useState } from 'react';

export default function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);

  function toggleImg() {
    if (img === props.img) {
      setImg(props.imgClicked);
    } else {
      setImg(props.img);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt="" height="300px" width="300px" />
      <br />
      <br />
      <button onClick={toggleImg}>Click Me</button>
    </div>
  );
}
