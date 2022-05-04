import { useState } from "react"
const ClickAblePicture = ({ img, imgClicked }) => {

    const [picture, setPicture] = useState(img)

    function changeImage() {
        if (picture === img) {
            return setPicture(imgClicked)
        } else {
            return setPicture(img)
        }
    }
    return (
        <div >
            <img onClick={changeImage} src={picture} alt="guy" />
        </div>
    )


}

export default ClickAblePicture

