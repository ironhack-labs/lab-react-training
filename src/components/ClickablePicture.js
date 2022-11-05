import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [glasses, setGlasses] = useState(false);
  function handleClick() {
    setGlasses((old) => !old);
  }
  return (
    <>
      {!glasses && (
        <img
          onClick={handleClick}
          src={img}
          alt="no glasses"
          style={{ width: 200 }}
        ></img>
      )}
      {glasses && (
        <img
          onClick={handleClick}
          src={imgClicked}
          alt="glasses"
          style={{ width: 200 }}
        ></img>
      )}
    </>
  );
}

export default ClickablePicture;
