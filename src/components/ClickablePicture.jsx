import React, { useState } from 'react'

function ClickablePicture({img, imgClicked}) {
    const [picture,setPicture] = useState(img)
  return (
    <div>
        <img src={picture} alt="yojia" onClick={()=>{picture===img?setPicture(imgClicked):setPicture(img)}}/>
        </div>
  )
}

export default ClickablePicture