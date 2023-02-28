import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [click, setClick] = useState(false)

    const clicked = () => {
        setClick(!click)
    }

    let image = click ? imgClicked : img
    return (
        <div className="<ClickablePicture">
            <img src={image} alt="image" onClick={clicked} />
        </div>
    )
}

export default ClickablePicture