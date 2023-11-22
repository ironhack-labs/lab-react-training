
import { useState } from "react"

import maxence from '../../assets/maxence.png'

import maxenceGlasses from '../../assets/maxence-glasses.png'


const ClickablePicture = ({ }) => {

    const [click, setClick] = useState(maxence)

    const handleClick = () => {
        setClick(!click)

    }

    return (
        <div className="ClickablePicture" onClick={handleClick}>

            <img src={click ? maxenceGlasses : maxence} alt="" />


        </div>
    )

}

export default ClickablePicture