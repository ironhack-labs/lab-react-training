import { useState } from "react"
import "./ClickablePicture.css"

const ClickablePicture = ({ img, imgClicked }) => {
    const [clicked, setClicked] = useState(false)
    const handler = () => setClicked(!clicked)

    return (
        <div onClick={handler}>
            <img src={clicked ? img : imgClicked} alt="photo" />
        </div>
    )
}

export default ClickablePicture