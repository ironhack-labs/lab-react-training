import { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      style={{
        width: '200px',
        height: '200px',
        // backgroundImage: !isClicked ? `url(${img})` : `url(${imgClicked})`,
        // backgroundSize: 'contain',
        padding: '10px',
        border: 'solid #00BFFF 1px',
      }}
    >
      {!isClicked ? (
        <img style={{ height: '100%' }} src={img}></img>
      ) : (
        <img style={{ height: '100%' }} src={imgClicked}></img>
      )}
    </div>
  );
}

export default ClickablePicture;
