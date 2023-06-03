import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  let [image, setImage] = useState(img);

  const updateImage = () => {
    setImage(!image);
  };

  return <img src={image ? img : imgClicked} alt="" onClick={updateImage} />;
}

export default ClickablePicture;
