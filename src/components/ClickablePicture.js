import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img);
  const handleClick = (e) => {
    e.preventDefault();
    setImage(image === img ? imgClicked : img);
  };

  return (
    <figure>
      <img alt="image" src={image} onClick={handleClick} />
    </figure>
  );
};

export default ClickablePicture;
