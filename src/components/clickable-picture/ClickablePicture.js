import "./ClickablePicture.css"
import React from 'react'
import { useState } from 'react'
import img1 from "../../assets/images/maxence-glasses.png"
import img2 from "../../assets/images/maxence.png"

function ClickablePicture() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='d-flex justify-content-center my-5'>
      {click ? (
      <img className='picture' src={img1} alt="" onClick={handleClick}/>) :       
      <img className='picture' src={img2} alt="" onClick={handleClick}/>}
    </div>
  )
}

export default ClickablePicture


// `${click} ? "../../assets/images/maxence-glasses.png" : "../../assets/images/maxence.png"`