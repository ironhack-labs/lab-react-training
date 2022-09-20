import './Clickable.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setClick] = useState(false)

    const uponClicked = () => {

        if (isClicked) setClick(false)

        else setClick(true)


    }
    return (

        <img onClick={uponClicked} src={isClicked ? imgClicked : img} alt='Boy with sunglasses' />

    )
}

export default ClickablePicture;