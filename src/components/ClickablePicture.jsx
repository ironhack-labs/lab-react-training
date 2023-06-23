import React, { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [imgSrc, setImgSrc] = useState(img);

  function changeImg() {
    imgSrc === img ? setImgSrc(imgClicked) : setImgSrc(img);
  }

  return (
    <div>
      <img
        onClick={changeImg}
        src={imgSrc}
        className="clickablePicture"
        alt="img"
        style={{ cursor: 'pointer' }}
      ></img>
    </div>
  );
}

export default ClickablePicture;
