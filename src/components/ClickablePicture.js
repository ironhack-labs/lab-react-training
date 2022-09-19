import React, {useEffect, useState} from 'react';

import '../styles/ClickablePicture.css';

const ClickablePicture = (props) => {
  const [image, setImage] = useState(props.img)
  const [clicked, setClicked] = useState(true);

  const imgChange = () => {
    return clicked ? setImage(props.img) : setImage(props.imgClicked)
  }

  useEffect(() => {
    imgChange()
  }, [clicked])

  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className='clickable_picture'>
      <img src={image} alt='picglasses' onClick={handleClicked} style={{width: 300, display:'block'}}/>
    </div>
  );
};

export default ClickablePicture;
