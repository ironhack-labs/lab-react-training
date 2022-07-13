import './ClickablePicture.css'
import { useState } from "react"


const ClickablePicture = ({ img, imgClicked }) => {

    const [photo, setPhoto] = useState(img)

     const togglePic = () => {
         photo === img ? setPhoto(imgClicked) : setPhoto(img)
     }
    return (
        < img src={photo} alt='photo1' onClick={togglePic} />

    )
}


export default ClickablePicture
