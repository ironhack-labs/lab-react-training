import './ClickablePicture.css'
import withoutGlasses from './../../assets/maxence.png'
import withGlasses from './../../assets/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="ClickPicture" onClick={handleClick}>
            <img src={click ? withGlasses : withoutGlasses} alt="" />
        </div>
    )
}

export default ClickablePicture