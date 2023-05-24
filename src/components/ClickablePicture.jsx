import { useState } from 'react'
import withGlassesImg from './../assets/images/maxence-glasses.png'
import withOutGlassesImg from './../assets/images/maxence.png'

const ClickablePicture = () => {
    
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        setClick(!clicked)
    }

    return (
        <img
            src={clicked ? withGlassesImg : withOutGlassesImg}
            onClick={handleClick}
            className="glassesImg"
            alt="glasses"
        />
    )
}

export default ClickablePicture