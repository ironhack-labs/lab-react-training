import { useState } from 'react'
import '../ClickablePicture/ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [dress, setDress] = useState(false)

    const switchImg = () => {
        setDress(!dress)
    }

    let imageSrc = dress ? img : imgClicked

    return (
        <div className='ClickPicture'>

            <img src={imageSrc} onClick={switchImg} alt="photo" />

        </div>

    )
}

export default ClickablePicture