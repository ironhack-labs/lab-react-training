import React, { useState } from 'react'
import './ClickablePicture.scss'

const ClickablePicture = () => {
    const [glasses, setGlasses] = useState(false)

    const onClick = () => {
        glasses
        ? setGlasses(false)
        : setGlasses(true)
    }
    return (
        <div className="ClickablePicture" >
            {
                glasses
                ? <img src="/img/persons/maxence-glasses.png" alt="dudeGlasses" onClick={onClick}/>
                : <img src="/img/persons/maxence.png" alt="noGlasses" onClick={onClick}/>
            }
        </div>
    )
}

export default ClickablePicture
