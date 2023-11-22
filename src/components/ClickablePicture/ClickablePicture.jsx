import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <img src={click ? `./../../public/images/${img}` : `./../../public/images/${imgClicked}`} alt="PhotoOnClick" onClick={handleClick} />
    )
}

export default ClickablePicture 