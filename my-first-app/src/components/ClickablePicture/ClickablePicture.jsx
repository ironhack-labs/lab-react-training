import glassesOff from './../../assets/maxence.png'
import glassesOn from './../../assets/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {
        setGlasses(!glasses)
    }


    return(
        <div onClick={handleGlasses}>
            <img src={glasses ? glassesOn : glassesOff} alt="" />
        </div>
    )
}

export default ClickablePicture