import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {
    const [image, setImage] = useState(img)

    return (
        <div>
            <img src={image} alt={image} onClick={() => setImage(imgClicked)} />
        </div>
    )
}

export default ClickablePicture