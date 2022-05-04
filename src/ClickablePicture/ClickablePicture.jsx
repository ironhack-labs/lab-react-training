import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [pictureValue, setPictureValue] = useState(img)

    const changePicture = () => {

        if (pictureValue === img) { setPictureValue(imgClicked) }
        else { setPictureValue(img) }
    }

    return (
        <button onClick={changePicture} >
            <img src={pictureValue} alt='images' />
        </button>
    )
}

export default ClickablePicture