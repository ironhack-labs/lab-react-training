import { useState } from 'react';
import './ClickablePicture.css';

function ClickablePicture({ img, imgClicked }) {
  const [currentImg, setCurrentImg] = useState(img);

  function handleToggleImg() {
    if (currentImg === img) {
      setCurrentImg(imgClicked);
    } else {
      setCurrentImg(img);
    }
  }
  return (
    <div className="click-pic">
      <img
        src={currentImg}
        alt="pic"
        style={{ cursor: 'pointer' }}
        onClick={handleToggleImg}
      />
    </div>
  );
}

export default ClickablePicture;
