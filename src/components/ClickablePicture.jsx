import React, { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img)

  const handleClick = () => {
    setImage(prev => prev === imgClicked ? img : imgClicked)
  }

  return (
    <div onClick={handleClick}>
    <img src={image} style={{ width: 200 }} alt="imageNormal" />
    </div>
  )
}

export default ClickablePicture