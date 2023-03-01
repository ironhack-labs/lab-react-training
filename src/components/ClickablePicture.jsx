import { useState } from 'react'
import glasses from '../assets/images/maxence-glasses.png'
import maxence from '../assets/images/maxence.png'
import './ClickablePicture.css'




const ClickablePicture = () => {



    const [clickable, setClickable] = useState(false)

    const switchClick = () => {
        setClickable(!clickable)
    }

    let imageclick = clickable ? glasses : maxence

    return (
        <div className="LikeButton">
            <img src={imageclick} alt="Botón" onClick={switchClick} />
        </div>
    )
}


export default ClickablePicture




