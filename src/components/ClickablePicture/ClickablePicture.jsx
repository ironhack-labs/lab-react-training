import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {
    const [imgValue, setImgValue] = useState(img)

    const changeImage = () => {
        setImgValue(imgValue === img ? imgClicked : img)
    }

    return (
        <>
            <img onClick={changeImage} src={imgValue} alt="image" />
        </>
    )
}

export default ClickablePicture