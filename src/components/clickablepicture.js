import React, { useState } from 'react';

export default function ClickablePicture(props) {
  let [src, setSrc] = useState(props.img);

  const handleClick = () => {
    if (src === props.img) {
      setSrc((src = props.imgClicked));
    } else {
      setSrc((src = props.img));
    }
  };

  return (
    <div className="clickImage">
      <img onClick={handleClick} src={src} alt="clickImage" />
    </div>
  );
}
