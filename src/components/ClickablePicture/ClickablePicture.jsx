import './ClickablePicture.css'
import { useState } from 'react'

import glassesImg from './../../assets/images/maxence-glasses.png'
import notGlassesImg from './../../assets/images/maxence.png'

const ClickablePicture = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <img
            src={clicked ? glassesImg : notGlassesImg}
            onClick={handleClick}
        />
    )
}




export default ClickablePicture;