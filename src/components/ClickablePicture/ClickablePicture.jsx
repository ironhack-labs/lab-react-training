import { useState } from "react"


const ClickablePicture = ({ max, maxWithGlasses }) => {

    const [image, setImage] = useState(max)

    const changeImage = () => {
        image === max ? setImage(maxWithGlasses) : setImage(max)
    }


    return <img src={image} onClick={changeImage} alt="max-image" />
}

export default ClickablePicture