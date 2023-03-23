
import React, { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

  const [activeImg, setActiveImg] = useState(img)

  const handleClick = () => {
    setActiveImg(
      activeImg === img ? imgClicked : img
    )
  }

  return (
    <div>
      <img src={`/${activeImg}`} alt="" onClick={handleClick} />
    </div>
  )
}

export default ClickablePicture