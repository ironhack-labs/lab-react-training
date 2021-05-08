import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = ({ image, imageClicked }) => {
  const [displayedImage, changeImageState] = useState(image);

  const style = {
    cursor: 'pointer'
  }

  return (
    <img style={style} src={displayedImage} alt='clickable ironhacker'
      onClick={() => changeImageState(displayedImage === image ? imageClicked : image )}
    />
  );
};


export default ClickablePicture;