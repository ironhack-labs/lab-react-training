
import { useState } from "react"
import "./ClickablePicture.css"


const ClickablePicture = ({ img, imgClicked }) => {
    console.log(imgClicked)

    const [Picture, SetPicture] = useState(false)

    const handleClick = () => {
        SetPicture(!Picture)
    }


    return <>
        <div className="Picture">
            <img src={Picture ? imgClicked : img}
                onClick={handleClick} alt="" />
        </div>
    </>
}

export default ClickablePicture   