import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(img)

    const changeImage = () => {
        image === img ? setImage(imgClicked) : setImage(img)
    }

    return (
        <section className='ClickablePicture'>
            <img onClick={changeImage} src={image} alt="image" />
        </section>
    )

}

export default ClickablePicture