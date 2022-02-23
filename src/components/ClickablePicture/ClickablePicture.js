import { useState } from 'react'

function ClickablePicture ({img, imgClicked}) {

    const [showImage, setShowImage] = useState(img)
    const [glasses, setGlasses] = useState(false)

    const changeGlasses = () => {

        if (glasses === false) {
            setShowImage(imgClicked)
            setGlasses(true)
        } else {
            setShowImage(img)
            setGlasses(false)
        }

    }

    return (
            <img onClick={changeGlasses} src={showImage} alt='img'/>
            )
            
}

export default ClickablePicture