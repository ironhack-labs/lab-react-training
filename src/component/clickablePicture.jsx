import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImg] = useState(img)

    return (<div>
        <img src={image} alt={img} onClick={() => setImg(imgClicked)}></img>
    </div>)
}

export default ClickablePicture