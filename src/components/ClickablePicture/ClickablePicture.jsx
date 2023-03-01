import './ClickablePicture.css'
import withoutGlasses from './../../assets/images/maxence.png'
import withGlasses from './../../assets/images/maxence-glasses.png'
import { useState } from 'react'


const ClickablePicture = () => {

    const [image, toggleImage] = useState(false)

    const switchGlasses = () => {
        toggleImage(!image)
    }

    let imagesource = image ? withGlasses : withoutGlasses

    return (
        <div className="ClickablePicture">
            <img src={imagesource} alt="Imagen" onClick={switchGlasses} />
        </div>
    )

}

export default ClickablePicture