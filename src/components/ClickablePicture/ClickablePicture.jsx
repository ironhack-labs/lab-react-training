import './ClickablePicture.css'
import { useState } from 'react'

import glassesOff from './../../assets//images/maxence.png'
import glassesOn from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <img
            src={clicked ? glassesOn : glassesOff}
            onClick={handleClick}
            className="ClickablePic"
            alt="Guy with sunglasses"
        />
    )
}

export default ClickablePicture