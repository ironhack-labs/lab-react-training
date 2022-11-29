import { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = ({ img, imgClicked }) => {
  const [picture, setPicture] = useState(img);

  const changePicture = () => {
    picture === img ? setPicture(imgClicked) : setPicture(img);
  };

  return (
    <div>
      <img
        className="ClickablePicture"
        src={picture}
        alt="Random guy"
        onClick={changePicture}
      />
    </div>
  );
};

export default ClickablePicture;
