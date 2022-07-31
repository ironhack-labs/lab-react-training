import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [showImage, setShowImage] = useState(true); //using boolean
  function handleClick() {
    setShowImage(!showImage);
  } //return the contrary boolean value

  return (
    <img
      src={showImage ? { img } : { imgClicked }} //if true shows the first, if false show the second one
      alt="clickable picure"
      onClick={handleClick}
      style={{ width: 100, height: 100 }}
    />
  );
}
export default ClickablePicture;
