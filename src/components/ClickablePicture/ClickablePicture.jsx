import { useState } from "react"

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setPhoto] = useState(false)
    const handleClick = () => {
        setPhoto(!clicked)
    }
    return (
        <>
            <img src={clicked ? imgClicked : img} alt="Image" onClick={handleClick} />
        </>
    )
}
export default ClickablePicture