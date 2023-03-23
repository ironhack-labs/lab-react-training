import React, { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

  const [image, setImage] = useState(img)

  const handleClicked = () => {
    setImage((previmg) => {
      return previmg === img ? imgClicked : img
    })
  }

  return (
    <div>
      <button onClick={handleClicked}><img src={image} alt="man-img" /></button>
    </div>
  )
}

export default ClickablePicture