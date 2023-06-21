import { useState } from 'react';

export default function ClickablePicture(props) {
  const [clicked, setClicked] = useState(false);
  const { img, imgClicked } = props;

  return (
    <img
      onClick={() => setClicked(!clicked)}
      src={clicked ? imgClicked : img}
      alt="maxence"
    />
  );
}
