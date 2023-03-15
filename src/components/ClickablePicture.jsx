import React, { useState } from 'react'

export default function ClickablePicture({ img, imgClicked }) {

  const [imageSrc, setImageSrc] = useState(img)

  function handleImgClick() {
    if (imageSrc === img) {
      setImageSrc(imgClicked)
    } else {
      setImageSrc(img)
    }
  }
  return (
    <div className="mt-3 relative">
      <img onClick={handleImgClick} className="w-52" src={imageSrc} alt={img} />
    </div>
  )
}
