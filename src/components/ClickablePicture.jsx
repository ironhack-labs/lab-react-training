import { useState } from 'react';
import PropTypes from 'prop-types';

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <img
      src={clicked ? imgClicked : img}
      width="250"
      alt="clickable"
      onClick={handleClick}
      className="cursor-pointer"
    />
  );
}

ClickablePicture.propTypes = {
  img: PropTypes.string.isRequired,
  imgClicked: PropTypes.string.isRequired,
};

export default ClickablePicture;