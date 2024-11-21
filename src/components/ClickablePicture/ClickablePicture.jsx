import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setCliked] = useState(false)
    const handleClick = () => {
        setCliked(!clicked)
    }
    return (
        <img src={clicked ? imgClicked : img} onClick={handleClick} alt="" />
    )
}

export default ClickablePicture
