import { useState } from 'react'
import glassOn from './../../assets/glasses.png'
import glassOff from './../../assets/maxence.png'



const ClickablePicture = () => {

    const [glass, setGlass] = useState(false)

    const handleGlass = () => {
        setGlass(!glass)
    }

    return (
        <div className='glass' onClick={handleGlass}>
            <img src={glass ? glassOn : glassOff} alt="" />
        </div>
    )
}

export default ClickablePicture
