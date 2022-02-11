import './ClickablePicture.css';
import React from 'react';

export default function ClickablePicture({ img, imgClicked }) {
  const [imgToggled, setImgToggled] = React.useState(true);
  const toggleImage = () => setImgToggled(!imgToggled);

  return (
    <div className="picture">
      {imgToggled ? (
        <img src={img} alt="" onClick={toggleImage} />
      ) : (
        <img src={imgClicked} alt="" onClick={toggleImage} />
      )}
    </div>
  );
}
