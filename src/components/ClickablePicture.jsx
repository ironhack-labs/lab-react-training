import { useState } from 'react';

export const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img);

  return (
    <div>
      <img
        src={image}
        alt={'Maxence'}
        onClick={() => setImage(image === img ? imgClicked : img)}
      />
    </div>
  );
};
