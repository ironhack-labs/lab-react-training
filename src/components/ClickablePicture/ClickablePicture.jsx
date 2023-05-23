import './ClickablePicture.css'
import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {
    const [clicked, setImage] = useState(false)

    const changeImg = () => {
        setImage(!clicked)
    }

    return (
        <div>
            <img onClick={changeImg}
                src={clicked ? imgClicked : img}
                alt="Clicked Image" />
        </div>
    )

}

export default ClickablePicture