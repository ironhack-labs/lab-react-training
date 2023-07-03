import React from 'react';
import maxence from '../images/maxence.png';
import maxenceGlasses from '../images/maxence-glasses.png';

function ClickablePicture({ photoBomb, setPhotobomb }) {
  function handleClick() {
    console.log('clicked');
    setPhotobomb(!photoBomb);
  }

  return (
    <div>
      <img
        onClick={handleClick}
        src={photoBomb ? maxence : maxenceGlasses}
        alt="Maxence"
      />
    </div>
  );
}

export default ClickablePicture;
