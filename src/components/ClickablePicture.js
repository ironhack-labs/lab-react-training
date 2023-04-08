import { useState } from "react";

function ClickablePicture({img, imgClicked}) {

    const [image, setImage] = useState(img)

    function handleClick() {
        setImage(image === img ? imgClicked : img)
    }

    return (
        <div className="clickImgDiv">
            <img src={image} alt="" onClick={handleClick}/>
        </div>
    )
}

export default ClickablePicture;