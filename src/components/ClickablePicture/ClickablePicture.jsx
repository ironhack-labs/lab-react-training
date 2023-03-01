import { useState } from 'react'
import './ClickablePicture.css'



const ClickablePicture = (props) => {

    const { img, imgClicked } = props

    const [image, setImage] = useState(false)

    const changeImage = () => {
        setImage(!image)
    }

    let imageUsed = image ? imgClicked : img

    return (
        <div className='imgGlasses'>
            <img src={imageUsed} onClick={changeImage} alt='imgButton'></img>
        </div>
    )
}

export default ClickablePicture
