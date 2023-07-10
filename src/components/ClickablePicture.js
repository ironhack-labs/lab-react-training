import React, { useState } from 'react';
import manImage from '../assets/images/maxence.png';
import sunglasses from '../assets/images/maxence-glasses.png';

export default function ClickablePicture() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSunglasses = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <img
        onClick={toggleSunglasses}
        className={!isChecked ? 'visible' : ''}
        src={manImage}
        alt="Man"
      />
      <img
        onClick={toggleSunglasses}
        className={isChecked ? 'visible' : ''}
        src={sunglasses}
        alt="Sunglasses"
      />
    </div>
  );
}
