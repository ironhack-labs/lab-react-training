import glassesOff from '../../assets/images/maxence.png'
import glassesOn from '../../assets/images/maxence-glasses.png'
import { useState } from 'react'

export default function ClickablePicture() {
    const [click, setClick] = useState(false)
    function handleClick() {
        setClick(!click)
    }
    
    return(
        <>
        <h1>ClickablePicture</h1>
        <button onClick={handleClick}>
        <img src={click ? glassesOn: glassesOff} alt=''></img>
        </button>
        </>
    )
}