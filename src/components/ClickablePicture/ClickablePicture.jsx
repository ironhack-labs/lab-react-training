import { useState } from "react"
import './ClickablePicture.css'


const ClickablePicture = ({ img, imgClicked }) => {

    const [glassesPicture, setGlassesPicture] = useState(false)

    const switchGlasses = () => {
        setGlassesPicture(!glassesPicture)
    }

    return (
        <div className="click">
            <img onClick={switchGlasses} src={glassesPicture ? imgClicked : img} alt="photo" />
        </div>
    );
}

export default ClickablePicture