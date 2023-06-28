import { useState } from 'react';

export default function ClickablePicture(props) {
  const [imageClicked, setImageClicked] = useState(false);

  const handleClick = () => {
    setImageClicked(!imageClicked);
  };

  return imageClicked ? (
    <img
      src={props.imgClicked}
      alt="Clicked"
      onClick={() => {
        handleClick();
      }}
    />
  ) : (
    <img
      src={props.img}
      alt="NonClicke"
      onClick={() => {
        handleClick();
      }}
    />
  );
}
