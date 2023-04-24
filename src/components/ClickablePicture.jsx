import React, { useState } from 'react';

const ClickablePicture = (props) => {
  const { img, imgClicked } = props;
  const [image, setImage] = useState(img);

  const handleClick = () => {
    image === img ? setImage(imgClicked) : setImage(img)
  };

  return (
    <div>
      <img src={image} alt="thumbnail" onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;
