import { useState } from "react"
import './Dice.css'

function ClickablePicture({img, imgClicked}){

    const [pictureValue, setPictureValue] = useState(true)

    const changeValue = () => pictureValue ? setPictureValue(false) : setPictureValue(true)

    return (
        <div className="ClickablePicture">
            <button onClick={() => changeValue()}>
                <img src={pictureValue ? img : imgClicked} alt=""/>
            </button>
        </div>
    )
}

export default ClickablePicture