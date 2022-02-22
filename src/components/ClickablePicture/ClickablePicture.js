import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {

    const [imageValue, setImageValue] = useState(img)

    const changeImg = event => {
        if (imageValue === img) {
            return setImageValue(event.target.src = imgClicked)
        } else if (imageValue === imgClicked) {
            return setImageValue(event.target.src = img)
        }
    }

    return (
        <figure className="clickablePicture">
            <img src={imageValue} onClick={changeImg} />
        </figure>
    )
}

export default ClickablePicture