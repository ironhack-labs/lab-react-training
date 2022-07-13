import React from 'react'
import { useState } from 'react'

export default function ClickablePicture(props) {

    const [showImg, setShowImg] = useState(true)
    function handleClick() {
        setShowImg(!showImg)
    }

    return (
        <img onClick={handleClick} height="328px" width="328px" 
        src= {showImg ? props.img : props.imgClicked} alt="pic" />
    )
}

 