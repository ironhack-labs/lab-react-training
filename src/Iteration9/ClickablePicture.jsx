import { useState } from 'react'



const ClickablePicture = ({ img, imgClicked }) => {

    const [imageValue, setImageValue] = useState(img)

    let toggleImg = () => {
        if (imageValue === img) {
            setImageValue(imgClicked)
        } else {
            setImageValue(img)
        }
    }

    return (
        <img onClick={toggleImg} src={imageValue} alt="guy image" />
    )
}

export default ClickablePicture