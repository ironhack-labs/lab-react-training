import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img);

  return (
    <div>
      <img
        src={image}
        alt="profile-img"
        style={{ cursor: 'pointer', margin: '1rem auto 3rem' }}
        onClick={() => setImage(img === image ? imgClicked : img)}
      />
    </div>
  );
}

export default ClickablePicture;
