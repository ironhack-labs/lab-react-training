import { useState } from 'react';

export default function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <img src={clicked ? imgClicked : img} alt="" onClick={handleClick} />
    </div>
  );
}
