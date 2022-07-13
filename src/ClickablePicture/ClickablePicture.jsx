import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {

    const [photo, setPhoto] = useState(img)

    const changePhoto = () => {
        let newPhoto = ""
        photo === img ? newPhoto = imgClicked : newPhoto = img
        setPhoto(newPhoto)
    }

    return (
        <img onClick={changePhoto} src={photo} alt="max" />
    )
}

export default ClickablePicture