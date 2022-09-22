import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [imgState, setImageState] = useState(img);

  return (
    <div>
      <img src={imgState} alt="img"
        onClick={() => {
          imgState === img ? setImageState(imgClicked) : setImageState(img);
        }}
      />
    </div>
  );
}

export default ClickablePicture;


