import { useState } from "react"
import maxence from "./../../assets/maxence.png"
import maxenceGlasses from "./../../assets/maxence-glasses.png"

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const addGlasses = () => {
        setGlasses(!glasses)
    }

    return (

        <div className="MaxenceGlasses" onClick={addGlasses}>

            <img src={glasses ? maxenceGlasses : maxence} alt="maxence" />

        </div>
    )
}

export default ClickablePicture