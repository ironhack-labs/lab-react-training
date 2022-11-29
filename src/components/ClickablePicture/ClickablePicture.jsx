import { useState } from "react";
import './ClickablePicture.css'


const ClickablePicture = (props) => {
    const { img, imgClicked } = props
    const [showGafas, setShowGafas] = useState(img)

    const handleShowGafas = () => {
        showGafas === img
            ? setShowGafas(imgClicked)
            : setShowGafas(img)

    }

    return (
        <>
            <img onClick={handleShowGafas} src={showGafas} alt='' />
        </>

    )
}

export default ClickablePicture