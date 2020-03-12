import React from 'react'
import './ClickablePicture.css'
const ClickablePicture = (props) => {
    const {changeImg, imgSrc} = props
    // src = './img/persons/maxence.png' - because index.html core is in the public folder and img folder also in the same folder
    return (
        <div className='container'>
            <h2>teration 9: State: ClickablePicture</h2>
            <hr/>
            <div>
                <img onClick={changeImg} src={imgSrc} alt={imgSrc}/>
            </div>
        </div>
    )
}

export default ClickablePicture
