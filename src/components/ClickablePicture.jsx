import glasses from '../assets/images/maxence-glasses.png';
import noGlasses from '../assets/images/maxence.png';

import React, { useState } from 'react';

function ClickablePicture() {
  const [image, setImage] = useState(true);

  const toggleImage = () => {
    return setImage(!image);
  };
  return (
    <div onClick={toggleImage}>
      {image ? (
        <img className="glasses" src={noGlasses} alt="no glasses" />
      ) : (
        <img className="glasses" src={glasses} alt="glasses" />
      )}
    </div>
  );
}

export default ClickablePicture;
