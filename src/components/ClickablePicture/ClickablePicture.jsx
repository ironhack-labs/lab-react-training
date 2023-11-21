import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <img onClick={handleClick} src={click ? img : imgClicked} alt="" />
    )

}

export default ClickablePicture