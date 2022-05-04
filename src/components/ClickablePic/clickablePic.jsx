import { useState } from 'react'
import './clickablePic.css'

const ClickablePicture = ({ img, imgClicked }) => {

    // const [showGlasses, setGlasses] = useState(true)
    const [picValue, setPicValue] = useState(img)

    const toggleImage = () =>{
        if (picValue === img){
            setPicValue(imgClicked)
        }else{
            setPicValue(img)
        }
    }

    return (

        <button onClick={toggleImage}>
            <img src={picValue} alt="person" ></img>
        </button>

    )
}

export default ClickablePicture


