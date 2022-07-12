import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setIsClicked] = useState(false)

    const clickHandle = () => {
        if (isClicked) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }

    return (
        <img onClick={clickHandle} src={isClicked ? imgClicked : img} alt="Guy with or without glasses" />
    )
}

export default ClickablePicture