import { useState } from "react"
import maxence from "../assets/images/maxence.png"
import maxenceGlasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [click, setClick] = useState(false)
    
    function handleClick() {
        if (click === false) {
            setClick(true)
        } else {
            setClick(false)
        }
    }

    return (
        <div onClick={handleClick}>
            <img src={click === true ? maxenceGlasses : maxence} alt="Click Me" />
        </div>
    )
}

export default ClickablePicture;