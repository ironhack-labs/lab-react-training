import { useState } from 'react';

export default function ClickablePicture(props) {
  const [imageClicked, setImageClicked] = useState(false);

  const handleClick = () => {
    setImageClicked(!imageClicked);
  };

  if (imageClicked) {
    return (
      <img
        src={props.imgClicked}
        alt="Clicked"
        onClick={() => {
          handleClick();
        }}
      />
    );
  } else {
    return (
      <img
        src={props.img}
        alt="NonClicke"
        onClick={() => {
          handleClick();
        }}
      />
    );
  }
}
