import React, { useState } from 'react';

export default function ClickablePictureHook({ img, imgClicked }) {
  const [withGlasses, setWithGlasses] = useState(true);

  const handleChangeImage = () => {
    setWithGlasses(!withGlasses);
  };

  return (
    <div onClick={handleChangeImage}>
      <img
        src={withGlasses ? img : imgClicked}
        alt="guy-with-glasses"
      />
    </div>
  );
}
