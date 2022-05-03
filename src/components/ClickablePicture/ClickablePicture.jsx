import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [showImg, setShowImg] = useState(true)

    const toggleImg = () => setShowImg(!showImg)

    return (
        <button onClick={toggleImg}><img src={showImg ? img : imgClicked}></img></button>
    )
}

export default ClickablePicture