import './ClickablePicture.css'
import maxence from './../../assets/maxence.png'
import maxenceglasses from './../../assets/maxence-glasses.png'
import { useState } from 'react'


const ClickablePicture = () => {

    const [glasses, setglasses] = useState(false)

    const handleGlasses = () => {
        setglasses(!glasses)
    }

    return (
        <div className="ClickableGlasses" onClick={handleGlasses}>
            <img src={glasses ? maxenceglasses : maxence} alt="" />

        </div>
    )
}

export default ClickablePicture