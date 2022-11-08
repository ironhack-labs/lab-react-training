import React, { useState } from 'react'

export const ClickablePicture = ({ clickPic, clickPicGlasses }) => {
  const [changeImg, setChangeImg] = useState(clickPic);
  return (
    <div className="clickPic-container">
      <img
        src={changeImg}
        alt="clickable-img"
        className="click-img"
        onClick={() => {
          changeImg === clickPic
            ? setChangeImg(clickPicGlasses)
            : setChangeImg(clickPic);
        }}
      />
    </div>
  );
};
