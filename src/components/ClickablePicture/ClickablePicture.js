import React from 'react';
import "./ClickablePicture.css"

export function ClickablePicture({ img, imgClicked }) {
  const [imageState, imageSetState] = React.useState(img);
  
  const toggleImg = () => {
    if (imageState === '/img/persons/maxence.png') {
      return <img src={imageSetState(imgClicked)} alt="some" />;
    }
    if (imageState === '/img/persons/maxence-glasses.png') {
      return <img src={imageSetState(img)} alt="some" />;
    }
  };

  return (
    <div className="toggle-img" onClick={toggleImg}>
      <img src={imageState} alt="some" />
    </div>

  );
}
