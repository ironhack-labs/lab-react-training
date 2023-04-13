import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);

  const handleClick = () => {
    setImage(image === img ? imgClicked : img);
  };
  console.log(image);
  return (
    <div>
      <img onClick={handleClick} src={image} alt="imagen" />
    </div>
  );
}

export default ClickablePicture;
