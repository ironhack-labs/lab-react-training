import { useState } from 'react'

import noGlasses from './../../assets/images/1.png'
import withGlasses from './../../assets/images/2.png'

const ClickablePicture = () => {

    const [glass, setGlass] = useState(false)

    const handleClick = () => {
        setGlass(!glass)
    }

    return (
        <img
            src={glass ? withGlasses : noGlasses}
            onClick={handleClick}
            className="glassify" s
            alt="glasses"
        />
    )
}

export default ClickablePicture 