import React, { useState } from 'react';

function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);
  const changeImg = () => {
    if (img === props.img) {
      setImg(props.imgClicked);
    } else {
      setImg(props.img);
    }
  };
  return (
    <div>
      <img onClick={changeImg} src={img} alt="img" className='clickable-picture' />
    </div>
  );
}

export default ClickablePicture;