import { useState } from "react"


const ClickablePicture = ({ img, imgClicked }) => {

    const [glasses, setGlasses] = useState(true)
    const [image, setImage] = useState(img)

    const changeImage = () => {
        if (glasses) {
            setImage(imgClicked)
        } else {
            setImage(img)
        }
    }


    return (
        <div>
            <img src={image} onClick={() => changeImage(setGlasses(!glasses))} />
        </div>
    )
}

export default ClickablePicture