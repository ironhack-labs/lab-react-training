import { useState } from "react"
import img from "./../../assets/maxence.png"
import imgClicked from "./../../assets/maxence-glasses.png"


const ClickablePicture = () => {
    const [clicked, setClicked] = useState(false)

    const handleImg = () => {
        setClicked(!clicked)
    }

    return (
        <div className="ClickablePicture" onClick={handleImg}>
            <img src={clicked ? imgClicked : img} alt="maxence" />
        </div>
    )
}

export default ClickablePicture