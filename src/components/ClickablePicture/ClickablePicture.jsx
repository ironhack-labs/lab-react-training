import { useState } from 'react'
import imageA from '../../assets/images/maxence.png'
import imageB from '../../assets/images/maxence-glasses.png'


const ClickablePicture = () => {
    const [imageShown, setImageShown] = useState(imageA)

    const toggleImage = () => setImageShown(imageA === imageShown ? imageB : imageA)

    return (
        <div className="clickable-picture">
            <img src={imageShown} onClick={toggleImage} alt='maxence'></img>
        </div>
    )
}

export default ClickablePicture