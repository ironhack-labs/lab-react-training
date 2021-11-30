import React, {useState} from 'react'
import Maxence from '../assets/images/maxence.png'
import MaxenceGlasses from '../assets/images/maxence-glasses.png'

export default function ClickablePicture() {
    const [clicked, setClicked] = useState(false)

    const clickHandler = () => {
        setClicked(clicked => !clicked)
    }
    
    return (
        <img onClick={clickHandler} src={clicked ? MaxenceGlasses : Maxence}/>
    )
}
