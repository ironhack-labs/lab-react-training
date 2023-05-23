import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(true)

    const handleClick = () => {
        setImage(!image)
    }
    return <button onClick={handleClick}> <img
        src={image ? img : imgClicked}
        onClick={handleClick}
        className="LikeButton"
        alt="Botón de like"
    />
    </button>

}

export default ClickablePicture
