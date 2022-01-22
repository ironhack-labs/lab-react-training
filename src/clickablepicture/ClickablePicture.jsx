import React from 'react';
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {
  const [state, setState] = React.useState(false);

  return (
    <div className="ClickablePicture">
      {!state ? (
        <img onClick={() => setState(!state)} src={img} alt="smiling guy" />
      ) : (
        <img
          onClick={() => setState(!state)}
          src={imgClicked}
          alt="smiling guy with pixelart sunglasses"
        />
      )}
    </div>
  );
};

export default ClickablePicture;
