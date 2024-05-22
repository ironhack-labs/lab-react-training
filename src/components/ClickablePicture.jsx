import React, { useState } from 'react';
import originalImg from '../assets/images/PastedGraphic.png';
import overlayImg from '../assets/images/glasses.png';

const ClickablePicture = () => {
  const [isOverlay, setIsOverlay] = useState(false);

  const handleClick = () => {
    setIsOverlay(!isOverlay);
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative', display: 'inline-block' }}>
      <img src={originalImg} alt="Original" style={{ display: 'block' }} />
      {isOverlay && (
        <img
          src={overlayImg}
          alt="Overlay"
          style={{
            position: 'absolute',
            top: '42%', // Adjust the top position as desired
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: '50%',
          }}
        />
      )}
    </div>
  );
};

export default ClickablePicture;
