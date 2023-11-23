import { useState } from "react"


function ClickablePicture({ img, imgClicked }) {

    const [max, setMax] = useState(false)

    const handleMax = () => {
        setMax(!max)
    }

    return (
        <figure className="ClickablePicture" onClick={handleMax}>
            <img src={max ? img : imgClicked} alt="" />
        </figure>


    )
}

export default ClickablePicture