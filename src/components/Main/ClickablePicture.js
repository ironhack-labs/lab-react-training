// ./components/Main/ClickablePicture.js

import React from 'react'
import { useState } from 'react'

export default function ClickablePicture(props) {
    console.log("props:",props)
    const [picture,setPicture] = useState(props.img)

    const changePicture = () => {
        
       let image = picture
       image === props.img ? image = props.imgClicked : image = props.img
       setPicture(image)
       console.log(picture)
    }

  return (
    <div>
        <img src={picture} alt="pictureImg" onClick={ ()=>{ changePicture() }}/>
    </div>
  )
}
