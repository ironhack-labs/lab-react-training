import { useState } from "react"
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {


    const [hasGlasses, setHasGlasses] = useState(false)

    const glasses = () => setHasGlasses(!hasGlasses)

    return (
        <img src={hasGlasses ? `${img}` : `${imgClicked}`} onClick={glasses} />
    )

}


export default ClickablePicture