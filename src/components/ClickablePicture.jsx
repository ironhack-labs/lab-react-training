import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {
    const [image, setImage] = useState(false)

    const handleImg = () => {
        setImage(!image)
    }

    return (
        <img src={image ? img : imgClicked} alt="img" onClick={handleImg} />
    )
}

export default ClickablePicture