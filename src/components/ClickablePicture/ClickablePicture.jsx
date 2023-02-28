import './ClickablePicture.css'
import imageGlasses from './../../assets/images/glasses.png'
import imageWithoutGlasses from './../../assets/images/foto.png'
import { useState } from 'react'

const ClickablePicture = () => {
    const [photo, setPhoto] = useState(false)

    const switchPhoto = () => {
        setPhoto(!photo)
    }

    let imagesource = photo ? imageGlasses : imageWithoutGlasses

    return (
        <div className='ClickablePicture'>

            <img src={imagesource} alt="glasses" onClick={switchPhoto} />

        </div>
    )
}

export default ClickablePicture