import React, { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

  const [image, setImage] = useState(img)

  const handleClicked = () => {
    setImage((previmg) => {
      if(previmg === img) {
        previmg = imgClicked
      } else {
        previmg = img
      }
      return previmg
    })
  }

  return (
    <div>
      <button onClick={handleClicked}><img src={image} alt="man-img" /></button>
    </div>
  )
}

export default ClickablePicture