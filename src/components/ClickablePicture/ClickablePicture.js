import './ClickablePicture.css'
import { useState } from 'react'

import glassesOffImg from './../../assets/images/maxence.png'
import glassesOnImg from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)
    const handleClick = () => {
        setGlasses(!glasses)
    }

    return (
        <img
            src={glasses ? glassesOnImg : glassesOffImg}
            onClick={handleClick}
            className="ClickablePicture"
            alt="gafas"
        />
    )
}

export default ClickablePicture