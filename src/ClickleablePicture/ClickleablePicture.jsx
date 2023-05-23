import { useState } from "react"
import image from "../assets/images/maxence.png"
import clickImage from "../assets/images/maxence-glasses.png"


const ClickleablePicture = () => {

    const [imgValue, setImage] = useState(true)

    const handleChange = () => {
        setImage(!imgValue)
    }
    return (
        <img onClick={handleChange} src={imgValue ? image : clickImage} alt="image" style={{ width: 250 }} />
    )
}

export default ClickleablePicture