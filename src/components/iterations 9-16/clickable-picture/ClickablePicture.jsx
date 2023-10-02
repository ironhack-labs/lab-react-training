import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
    const [image, setImage] = useState(img)
    return (
        <img className="m-2" src={image} style={{ width: "250px", height: "250px" }} onClick={() => {
            image === img ? setImage(imgClicked) : setImage(img)
        }} />
    )
}

export default ClickablePicture