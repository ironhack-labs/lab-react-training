import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(true);

  const changeImage = () => {
    setImage(!image);
  };
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={changeImage}
      className="CliclablePicture"
    >
      {image ? (
        <img src={img} alt="CliclablePicture" />
      ) : (
        <img src={imgClicked} alt="CliclablePicture" />
      )}
    </div>
  );
}
export default ClickablePicture;
