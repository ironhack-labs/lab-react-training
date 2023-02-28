import { useState } from "react"
import './../ClickablePicture/ClickablePicture.css'


const ClickablePicture = ({ img, imgClicked }) => {

    const [imgValue, setImgValue] = useState(false)

    const switchImg = () => {
        setImgValue(!imgValue)
    }


    return (
        <div>
            <img className="picture" src={imgValue ? img : imgClicked} alt="button" onClick={switchImg} />
        </div>
    )
}

export default ClickablePicture