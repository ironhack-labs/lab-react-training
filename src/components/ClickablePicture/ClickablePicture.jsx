import './ClickablePicture.css'
import { useState } from 'react'
import glassesOn from './../../assets/glasses-on.png'
import glassesOff from './../../assets/glasses-off.png'

const ClickablePicture = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className="ClickablePicture" onClick={handleClick}>
            <img src={click ? glassesOn : glassesOff} alt="glasses" />
        </div>
    )
}
export default ClickablePicture
