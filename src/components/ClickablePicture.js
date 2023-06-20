import { useState } from "react"

export default function ClickablePicture({img, imgClicked}) {

    const [ clicked, updateClicked] = useState(false);
    const click = () => updateClicked(!clicked);
    return (
        <div>
        {
            !clicked
            ? <img src={img} onClick={click} alt="not clicked" />
            : <img src={imgClicked} onClick={click} alt="clicked" />
        }
        </div>
    )
}