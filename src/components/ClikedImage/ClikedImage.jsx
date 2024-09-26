import { useState } from "react"


const ClickImage = ({ img, imgClicked }) => {

    const [clicked, setCliked] = useState(false)

    const handleClick = () => {
        setCliked(!clicked)
    }

    return (
        <img
            src={clicked ? img : imgClicked}
            onClick={handleClick}
            className="click-IMG"
            alt="Botón de like"
        />
    )
}

export default ClickImage