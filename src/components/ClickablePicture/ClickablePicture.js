import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {
   
    let [image, setImage] = useState(img)

    const changeImage = () => {
        if (image === img) {
            setImage(imgClicked)
        } else {
            setImage(img)
        }
    }

    return (
        <>
            <img onClick={changeImage} src={image} />
        </>
    );
}

export default ClickablePicture;