import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [imageValue, setImageValue] = useState(img)


    const toggleImg = () => {
        if (imageValue === img) {
            setImageValue(imgClicked)
        } else {
            setImageValue(img)
        }
    }

    return (
        <img onClick={toggleImg} src={imageValue} />
    )
}

export default ClickablePicture