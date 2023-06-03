import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState();

  const updateImage = () => {
    setImage(!image);
  };

  return <img src={image ? imgClicked : img} alt="" onClick={updateImage} />;
}

export default ClickablePicture;
