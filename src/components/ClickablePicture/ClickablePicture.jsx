import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({img, imgClicked}) => {

    console.log(img)
    const [image, setImage] = useState(true)

    const toggleImage = () => {
        setImage(!image)
    } 

    return (
        <img onClick={toggleImage} src={image ? img : imgClicked}   alt="picture" />
    )
}

export default ClickablePicture