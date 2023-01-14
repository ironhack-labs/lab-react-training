import { useState } from 'react';

export default function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [currentImage, setCurrentImage] = useState(img);

  const clickHandler = () => {
    if (currentImage === img) {
      setCurrentImage(imgClicked);
    } else {
      setCurrentImage(img);
    }
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="clickable"
        style={{ cursor: 'pointer' }}
        onClick={clickHandler}
      />
    </div>
  );
}
