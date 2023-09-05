import React, { useState } from 'react';

const ClickablePicture = ({ initialImage, alternateImage }) => {
  const [isInitialImage, setIsInitialImage] = useState(true);

  const toggleImage = () => {
    setIsInitialImage(!isInitialImage);
  };

  return (
    <div>
      <img
        src={isInitialImage ? initialImage : alternateImage}
        alt="Clickable"
        onClick={toggleImage}
      />
    </div>
  );
};

export default ClickablePicture;
