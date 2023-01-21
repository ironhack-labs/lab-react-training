import { useState } from "react";

function ClickablePicture() {
    const originalPic = "maxence.png"
    const effectPic = "maxence-glasses.png"


    const [picture, setPicture] = useState(originalPic)

    function handlePictureChange() {
        if (picture === originalPic) {
            setPicture(effectPic)
        } else {
            setPicture(originalPic)
        }
    }

    return (
        <div onClick={handlePictureChange}>
            <img src={picture} alt="pic" />

        </div>
    )
}

export default ClickablePicture;