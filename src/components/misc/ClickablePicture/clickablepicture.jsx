import React, { useState } from "react";
import './clickablepicture.css'

function ClickablePicture ({img, imgClicked}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)}

    const imgClick = isClicked ? imgClicked : img;
    
    return(
        
        <img className="click" src = {imgClick} alt=""  onClick={handleClick}/>
        
    )
}

export default ClickablePicture;