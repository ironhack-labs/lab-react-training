import { useState } from 'react'
import './ClickablePicture.css'
import noGlasses from './../../assets/images/maxence.png'
import glasses from './../../assets/images/maxence-glasses.png'


const ClickablePicture = () => {

    const [switchPicture, setSwitchPicture] = useState(false)

    const switchGlasses = () => {
        setSwitchPicture(!switchPicture)
    }

    let imageSource = switchPicture ? glasses : noGlasses

    return (
        <div className='ClickeablePicture'>
            <img src={imageSource} alt="image" onClick={switchGlasses} />
        </div>
    )
}

export default ClickablePicture