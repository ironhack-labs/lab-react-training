import { useState } from "react"
import normalPicture from '../../assets/images/maxence.png'
import glassesPicture from '../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [image, changeImage] = useState(normalPicture)
    const toggleChangeImage = () => changeImage(glassesPicture)

    return (
        <div className="ClickablePicture">
            <button onClick={toggleChangeImage}>
                <img src={image} alt="image"></img>
            </button>
        </div>
    )
}

export default ClickablePicture