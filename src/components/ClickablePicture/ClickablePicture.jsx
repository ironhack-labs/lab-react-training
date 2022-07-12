import './ClickablePicture.css'
import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {
    const [image, setImage] = useState(img)

    const changeImage = () => {
        image === img ? setImage(imgClicked) : setImage(img)
    }

    return (
           <img class='no-glasses-img' onClick={changeImage} src={image} alt="Male human being"/>
    )
}

export default ClickablePicture