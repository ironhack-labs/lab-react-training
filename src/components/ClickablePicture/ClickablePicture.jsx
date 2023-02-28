import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [clicked, setClicked] = useState(false)

    const switchClick = () => {
        setClicked(!clicked)
    }

    let imageResult = clicked ? img : imgClicked

    return (
        <div className="LikeButton">
            <img src={imageResult} alt="Botón" onClick={switchClick} />
        </div>
    )
}

export default ClickablePicture