import { useState } from 'react';
import './Component.css';

function ClikablePicture(props) {
  const [image, setImage] = useState(props.img);

  function handleClick() {
    if (image === props.img) {
      setImage(props.imgClicked);
    } else {
      setImage(props.img);
    }
  }

  return (
    <div>
      <img
        className="imgMaxence"
        onClick={handleClick}
        src={image}
        alt="changePicture"
      />
    </div>
  );
}

export default ClikablePicture;
