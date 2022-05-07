import { useState } from 'react';
import img from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [pictureClicked, setPictureClicked] = useState(false);

  const togglePicture = () => {
    setPictureClicked((prevClick) => !prevClick);
  };

  return (
    <div>
      <img
        src={pictureClicked ? imgClicked : img}
        alt="SunglassProfile"
        onClick={togglePicture}
      />
    </div>
  );
};

export default ClickablePicture;
