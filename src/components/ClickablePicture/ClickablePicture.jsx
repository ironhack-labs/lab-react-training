import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [currentImg, setCurrentImg] = useState(img)

    const changePicture = () => currentImg === img ? setCurrentImg(imgClicked) : setCurrentImg(img)

    return (
        <img onClick={changePicture} src={currentImg} />
    )

}

export default ClickablePicture
