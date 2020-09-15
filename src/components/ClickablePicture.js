import React, { useState } from 'react';

function ClickablePicture(props) {
  const [image, setImage] = useState(props.img);

  const handleImage = () => {
    if (image === props.img) {
      setImage(props.imgClicked);
    }
    if (image === props.imgClicked) {
      setImage(props.img);
    }
  };

  return (
    <div>
      <img
        onClick={handleImage}
        style={{ width: '400px' }}
        src={image}
        alt="image"
      />
    </div>
  );
}

export default ClickablePicture;
