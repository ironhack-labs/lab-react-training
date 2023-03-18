import React, { useState } from 'react';

function ClickablePicture({img, imgClicked}) {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked((prev) => !prev);
  };
  const src = clicked ? imgClicked : img
  return (
    <div className='pl-6'>
      <img src={src} alt="profile pic" onClick={handleClicked} />
    </div>
  );
}

export default ClickablePicture;
