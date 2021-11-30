import React, { useState } from 'react'
import img from '../assets/images/maxence.png'
import imgClicked from '../assets/images/maxence-glasses.png'


export default function ClickablePicture() {
    const [img, setImg] = useState (imgClicked)
    }

    const clickHandler = () => {
        setClicked(!s)
    
        // pm 
    }
   
    return (
        <div>
            <img src={img} onClick={clickHandler} />
            <img src={imgClicked} alt="" />
        </div>
    )
}
