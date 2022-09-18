import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);
  return (
    <img
      alt="profile"
      src={image}
      onClick={() => {
        image === imgClicked ? setImage(img) : setImage(imgClicked);
      }}
    />
  );
}

export default ClickablePicture;
