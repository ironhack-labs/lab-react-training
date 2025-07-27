import { useState } from "react";

function ClickablePicture({img, imgClicked}) {
    const [isImageClicked, setIsImageClicked] = useState(false);

    const toggleImage = () => {
        return setIsImageClicked(!isImageClicked);
    }

    return <div>
        <img onClick={toggleImage} src={isImageClicked ? img : imgClicked}  alt="Ironhacker"></img>
    </div>
}

export default ClickablePicture;