import { useState } from "react";
import noG from '../assets/images/maxence.png'
import wiG from '../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [noSun, SunSet] = useState(true)
    const click = () => (SunSet(!noSun))

    return (
        <img src={ noSun ? noG : wiG } onClick={click} />
        )
}

export default ClickablePicture