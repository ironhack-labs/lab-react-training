import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = ({ clickPic, clickPicGlasses }) => {
  const [changeImg, setChangeImg] = useState(clickPic);

  console.log(changeImg);
  return (
    <div className="clickPic-container">
      <img
        src={changeImg}
        alt="clickable-img"
        className="click-img"
        onClick={() => {
          setChangeImg(clickPicGlasses);
        }}
      />
    </div>
  );
};

export default ClickablePicture;
