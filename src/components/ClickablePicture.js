import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);

  return (
    <div>
      <img
        src={image}
        alt="img"
        onClick={() => setImage(img === image ? imgClicked : img)}
      />
    </div>
  );
}

export default ClickablePicture;
