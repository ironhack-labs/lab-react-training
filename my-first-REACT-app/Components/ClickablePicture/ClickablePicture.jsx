import './ClickablePicture.css'
import glassesOn from './../../public/maxence-glasses.png'
import glassesOff from './../../public/maxence.png'
import { useState } from 'react'


const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {
        setGlasses(!glasses)
    }

    return (
        <div className="glassesImg" onClick={handleGlasses}>
            <img src={glasses ? glassesOn : glassesOff} alt="" />

        </div>
    )
}


export default ClickablePicture