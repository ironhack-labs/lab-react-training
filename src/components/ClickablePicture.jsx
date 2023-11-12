import { useState } from "react";

function ClickablePicture(props) {
    const [imgSrc, setImgSrc] = useState(`src/assets/images/${props.img}`)

    function imageClick(event) {
        if (imgSrc == `src/assets/images/maxence.png`) setImgSrc(`src/assets/images/${props.imgClicked}`)
        if (imgSrc == `src/assets/images/maxence-glasses.png`) setImgSrc(`src/assets/images/${props.img}`)
    }

    return (
        <div>
            <button onClick={imageClick}>
                <img src={imgSrc} alt="Clickabel Picture" />
            </button>

        </div>
    )
};

export default ClickablePicture;