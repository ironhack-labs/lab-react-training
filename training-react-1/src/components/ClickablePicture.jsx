import { useState } from "react"
import glassesOf from "./../assets/maxence.png"
import glassesOn from "./../assets/maxence-glasses.png"


const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(true)

    const handleglasses = () => {
        setGlasses(!glasses)
    }

    return (
        <div className="ClickablePicture" onClick={handleglasses}>
            <img src={glasses ? glassesOf : glassesOn} alt="" />
        </div>
    )

}

export default ClickablePicture

