import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [picValue, setPicValue] = useState(img)
    const togglePic = () => setPicValue(!picValue)

    return (
        <img src={picValue ? img : imgClicked} onClick={togglePic}></img>
    )
}

export default ClickablePicture






