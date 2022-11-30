import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [imgValue, setimgValue] = useState(true)
    const imgNormal = () => setimgValue(!imgValue)
    return (
        <div className="Picture">
            {imgValue ? (
                <img src={img} alt="" onClick={imgNormal} />
            ) : (
                <img src={imgClicked} alt="" onClick={imgNormal} />
            )}
        </div>
    )
}

export default ClickablePicture





