import './ClickablePicture.css'
import nonGlasses from '../../assets/images/maxence.png'
import Glasses from '../../assets/images/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <>
            <figure>
                <img src={click ? Glasses : nonGlasses} onClick={handleClick} alt=""></img>
            </figure>
        </>


    )
}

export default ClickablePicture