import { useState } from 'react';
// import "./ClickablePicture.css";

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
          changeImg === clickPic
            ? setChangeImg(clickPicGlasses)
            : setChangeImg(clickPic);
        }}
      />
    </div>
  );
};

export default ClickablePicture;
