import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(img)

    const handleImage = () => {
        image === img ? setImage(imgClicked) : setImage(img)
    }


    return (
        <img onClick={handleImage} src={image} alt="image" />
    )
}

export default ClickablePicture
