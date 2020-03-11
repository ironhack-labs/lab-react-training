import React from 'react'
import './ClickablePicture.css'
const ClickablePicture = (props) => {
    const {changeImg, imgSrc} = props
    // src = './img/persons/maxence.png' - because index.html core is in the public folder and img folder also in the same folder
    return (
        <div>
            <img onClick={changeImg} src={imgSrc} alt={imgSrc}/>
        </div>
    )
}

export default ClickablePicture
