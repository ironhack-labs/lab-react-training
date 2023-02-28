import { useState } from "react"
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [glassesPic, setGlassesPic] = useState(false)

    const switchGlasses = () => {
        setGlassesPic(!glassesPic)
    }

    return (
        <div className="clickPic">
            <img onClick={switchGlasses} src={glassesPic ? imgClicked : img} alt="boy picture" />
        </div>
    );
}

export default ClickablePicture