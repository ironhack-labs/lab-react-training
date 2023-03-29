import React, { useState } from 'react';


function ClickablePicture({ img, imgClicked }) {

  const [picture, setPicture] = useState(img);

  const handleOnClick = () => {
    setPicture(prevPicture => (prevPicture === img) ? imgClicked : img)
  }

  return (
    <img src={picture} alt='Maxence without glasses' onClick={handleOnClick} style={{width: 200}} className="mb-4" />
  )
}

export default ClickablePicture;