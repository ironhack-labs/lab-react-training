import { useState } from 'react';
import './clickablePicture.css';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);

  const handleUpdateImg = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  return (
    <div className="clickable-container">
      <img
        src={clicked ? imgClicked : img}
        alt="img"
        onClick={handleUpdateImg}
      />
    </div>
  );
};

export default ClickablePicture;
