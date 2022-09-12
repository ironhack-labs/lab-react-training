import React from 'react'
import { useState } from 'react';

function ClickablePicture({img, imgClicked}) {
const [image, setImage ] = useState(false)

const handleClick = () => {
  setImage(imageClicked => imageClicked ? false : true)
}

console.log(image)

  return (
    <img className='w-25' src={require ('../../assets/images/'+ ( image ? imgClicked : img ))} alt="Guy with or without glasses"  onClick={handleClick} />
  )
}

ClickablePicture.defaultProps={
  img: "../../assets/images/maxence.png",
}

export default ClickablePicture