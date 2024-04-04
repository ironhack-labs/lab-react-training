import { useState } from "react";
import './ClickablePicture.css'

function ClickablePicture(props)  {
    const {img, imgClicked} = props
    const [state, setImgIndex] = useState(0)

    const changeImg = () => {

    setImgIndex((state + 1) % 2)
    }

    return (
        <div className="clickablepicture">
            <img onClick={changeImg} src={state === 0 ? img : imgClicked}></img>
        </div>
    )

}


export default ClickablePicture