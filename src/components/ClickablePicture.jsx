import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [bool, setBool] = useState(true);

  const handleClick = () => {
    setBool(!bool);
  };

  return (
    <div>
      <img
        onClick={() => handleClick()}
        src={bool ? img : imgClicked}
        alt="img"
      />
    </div>
  );
}
export default ClickablePicture;
