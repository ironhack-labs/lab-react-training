
import { useState } from "react"

function ClickablePicture(props) {

    const {img, imgClicked} = props

    const [image, setImage ] = useState(img)


const togglePicture = () => {
    setImage(imgClicked)
}

    return (
        <div>
            <img onClick={togglePicture} src={image} />
        </div>
    )
}

export default ClickablePicture