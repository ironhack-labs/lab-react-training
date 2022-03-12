import { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [click, setClick] = useState(false);

  function handleClick(params) {
    setClick(!click);
  }

  return (
    <div>
      {click ? (
        <img src={imgClicked} onClick={handleClick} />
      ) : (
        <img src={img} onClick={handleClick} />
      )}
    </div>
  );
}

export default ClickablePicture;
