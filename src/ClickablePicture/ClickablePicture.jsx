import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {

  const [showOriginalImage, setShowOriginalImage] = useState(true);

  const changeImg = () => {
    setShowOriginalImage(!showOriginalImage);
  };

  return (
    <button>
      <img
        src={showOriginalImage ? img : imgClicked}
        alt="photo"
        onClick={changeImg}
      ></img>
    </button>
  );

};

export default ClickablePicture;
