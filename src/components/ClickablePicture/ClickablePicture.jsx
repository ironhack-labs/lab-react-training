import './ClickablePicture.css';
import noGlasses from '../../assets/images/maxence.png';
import withGlasses from '../../assets/images/maxence-glasses.png';

import React, { useState } from 'react';

function ClickablePicture() {
  const [image, setImage] = useState(true);

  const toggleImage = () => {
    return setImage(!image);
  };
  return (
    <div>
      <a onClick={toggleImage}>
        {image ? <img src={noGlasses} /> : <img src={withGlasses} />}
      </a>
    </div>
  );
}

export default ClickablePicture;
