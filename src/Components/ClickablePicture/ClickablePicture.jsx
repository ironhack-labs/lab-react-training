import './ClickablePicture.css'
import { useState } from 'react'
import glassesImage from './../../assets/images/maxence-glasses.png'
import noGlassesImage from './../../assets/images/maxence.png'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const switchlasses = () => {
        setGlasses(!glasses)
    }

    let imageSource = glasses ? glassesImage : noGlassesImage

    return (

        <div className='ClickablePicture'>
            <img src={imageSource} onClick={switchlasses} alt="no glasses" />
        </div>

    )
}

export default ClickablePicture