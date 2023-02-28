import { useState } from "react"
import './ClickablePicture.css'
import maxence from '../../assets/images/juanan.png'
import maxenceGlasses from '../../assets/images/juan.png'

const ClickablePicture = () => {

    const [click, setClick] = useState(true)

    const clickImage = () => {
        setClick(!click)
    }

    let image = click ? maxence : maxenceGlasses

    return (
        <div className="ClickablePicture">
            <img src={image} alt="image" onClick={clickImage} />
        </div>
    )
}

export default ClickablePicture