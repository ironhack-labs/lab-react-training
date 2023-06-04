import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [picture, setPicture] = useState(img);

  const switchPictures = () => {
    picture === img ? setPicture(imgClicked) : setPicture(img);
  };
  return (
    <div style={{ width: '200px' }}>
      <img
        src={picture}
        alt=""
        onClick={() => {
          switchPictures();
        }}
      ></img>
    </div>
  );
}

export default ClickablePicture;
