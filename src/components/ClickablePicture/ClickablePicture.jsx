import { useState } from "react"
import '../ClickablePicture/ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setClicked] = useState(false)

    const changeClicked = () => {
        setClicked(!clicked)
    }

    return (
        <div className="ClickablePicture">
            <img onClick={changeClicked} src={clicked ? imgClicked : img} alt="ThugLife" />
        </div>
    )

}

export default ClickablePicture