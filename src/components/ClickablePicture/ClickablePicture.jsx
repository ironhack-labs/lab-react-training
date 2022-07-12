import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(img)

    const changeImg = () => {

        image === img ? setImage(imgClicked) : setImage(img)
    }

    return (

        <img onClick={changeImg} src={image} alt="Image"></img>

    )
}

export default ClickablePicture