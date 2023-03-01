import { useState } from "react"
import "./ClickablePicture.css"
import noGlassesImage from './../../assets/images/maxence.png'
import glassesImage from './../../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
    const [noGlases, setNoGlasses] = useState(false)

    const glassesOn = () => {
        setNoGlasses(!noGlases)
    }

    let turndownforWhat = noGlases ? glassesImage : noGlassesImage
    return (
        <div className="clickimage">
            <img src={turndownforWhat} alt="" onClick={glassesOn} />
        </div>
    )
}

export default ClickablePicture