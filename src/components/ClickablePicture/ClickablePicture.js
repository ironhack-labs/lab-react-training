import { useState } from 'react'
import './ClickablePicture.css'
import noGlasses from './../../assets/images/maxence.png'
import withGlasses from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
    const [image, setImage] = useState(noGlasses)

    const changePicture = () => {

        image === noGlasses ? setImage(withGlasses) : setImage(noGlasses)
    }

    return (
        <div className='clickable'>
            <img src={image} onClick={changePicture} alt={image} />
        </div>
    )

}

export default ClickablePicture