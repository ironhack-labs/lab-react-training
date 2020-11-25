import React from 'react'
import {useState} from 'react'

const ClickablePicture = () => {
    const [image, setImage] = useState('../img/persons/maxence.png')
    function change(){
        setImage('../img/persons/maxence-glasses.png')
    }
    return (
        <div>
            <img src={image} onClick={change}/>
        </div>
)}

export default ClickablePicture