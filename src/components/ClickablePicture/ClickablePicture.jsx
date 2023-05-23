import React, { useState } from 'react'
import perroMeme from "../../assets/images/meme-perro.webp"
import gafasMeme from "../../assets/images/gafas.png"

const ClickablePicture = () => {
    const [gafas, setGafas] = useState(false)
    const handleClick = () => {
        setGafas(!gafas)
    }
    return (
        <div className='mt-5 perroMeme'>
            < img src={perroMeme} style={{ width: "300px" }} onClick={handleClick} />
            <img className='gafas' src={gafas ? gafasMeme : null} style={{ width: "100px" }} alt="" />
        </div >
    )
}

export default ClickablePicture