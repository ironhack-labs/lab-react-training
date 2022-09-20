import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {

    const [image, setImage] = useState(imgClicked)

    const change = () => {
        image === imgClicked ? setImage(img) : setImage(imgClicked)
    }

    return (
        <img className="glasses" onClick={change} src={image} alt="" />
    )

}

export default ClickablePicture;