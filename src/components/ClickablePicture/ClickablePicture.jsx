import { useState } from 'react'
import './ClickablePicture.css'

function ClickablePicture({ img, imgClicked }) {

    const [showInitial, setShowInitial] = useState(img)

    const toggleImage = () => {
        showInitial === img ? setShowInitial(imgClicked) : setShowInitial(img)
    }

    return (

        <img src={showInitial} onClick={toggleImage}></img>

    )
}

export default ClickablePicture