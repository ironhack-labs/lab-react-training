import React, { useState } from 'react'

function ClickablePicture({img, imgClicked}) {
  const [image, setImage] = useState(img)
  const handleOnClick = () => {
    setImage((prev) => prev === img ? imgClicked : img)
  }

  return (
    <img src={`../${image}`} alt="" style={{width: '400px'}} onClick={handleOnClick}/>
  )
}

export default ClickablePicture