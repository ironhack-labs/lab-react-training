import { React, useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [imgSrc, setImgSrc] = useState(img);
  const handleClick = () => {
    switch (imgSrc) {
      case img:
        return setImgSrc(imgClicked);
      case imgClicked:
        return setImgSrc(img);
    }
  };
  return (
    <div>
      <img src={imgSrc} onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;
