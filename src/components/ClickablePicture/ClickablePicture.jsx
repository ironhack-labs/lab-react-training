import "./ClickablePicture.css"
import { useState } from "react";



const ClickablePicture = ({ img, imgClicked }) => {
    const [normalPicture, setNormalPicture] = useState(true)
    console.log(img)
    const togglePicture = () => {
        setNormalPicture(!normalPicture)
    }
    let currImage
    normalPicture ? currImage = img : currImage = imgClicked
    return (
        <img src={currImage} onClick={togglePicture} className='clickImg' />


    )
}


export default ClickablePicture;