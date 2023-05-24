import { useState } from "react";

const ClickablePicture = () => {

    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <img src={clicked ? 'maxence.png' : 'maxence-glasses.png'}
            onClick={handleClick}
            className="clickedPhoto"

        />
    )
}

export default ClickablePicture