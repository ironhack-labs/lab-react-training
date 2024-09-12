import maxence from './../../assets/images/maxence.png'
import maxenceGlasses from './../../assets/images/maxence-glasses.png'

import { useState } from 'react';

const ClickablePicture = () => {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <img
            src={clicked ? maxenceGlasses : maxence}
            onClick={handleClick}
            className="ClickablePicture"
            alt=""
        />

    )

}

export default ClickablePicture