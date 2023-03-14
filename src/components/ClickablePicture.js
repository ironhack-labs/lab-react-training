import { useState } from 'react'

import img1 from '../data/maxence.png'
import img2 from '../data/maxence-glasses.png'


function ClickablePicture(){
    const [element, setElement] = useState(true)

    function handleChange(){
        setElement(!element)
    }

    return (
        <img onClick={handleChange} src= {element ? img1 : img2} alt= "foto" />
    )
}

export default ClickablePicture;