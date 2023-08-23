import { useState } from 'react'
import maxence from './../../assets/maxence.png'
import maxenceGlasses from './../../assets/maxence-glasses.png'
import './ClickablePicture.css'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleImage = () => {
        setGlasses(!glasses)
    }

    return (
        <div className="ClickablePicture" onClick={handleImage}>
            <img src={glasses ? maxenceGlasses : maxence} alt="maxence" />
        </div>
    )
}

export default ClickablePicture