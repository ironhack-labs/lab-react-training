import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {

    const [currentImage, setImage] = useState(img)

    const changeImage = () => currentImage === img ? setImage(imgClicked) : setImage(img)

    return (
        <img src={currentImage} alt="" onClick={changeImage} />
    )
}

export default ClickablePicture