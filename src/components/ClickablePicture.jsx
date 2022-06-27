import React from 'react'
import { useState } from 'react'



export default function  ClickablePicture({img,imgClicked}) {
  const toPrintArray = [img, imgClicked]
  const [indexToPrint, setIndexToPrint] = useState(0)
  const toggleImg = () =>{
    setIndexToPrint(indexToPrint ===0 ? 1 : 0)
  }

  return (
    <div>
      <img src={toPrintArray[indexToPrint]} onClick={()=>toggleImg()}/>
    </div>
  )
}
