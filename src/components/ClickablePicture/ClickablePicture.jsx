import { useState } from 'react';
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [currentPic, setCurrentPic] = useState(true)

    const handleCurrentPic = () => setCurrentPic(!currentPic)

    return (
        <img onClick={handleCurrentPic} src={currentPic ? `${img}` : `${imgClicked}`} alt="Guy image" />
    )

}

export default ClickablePicture