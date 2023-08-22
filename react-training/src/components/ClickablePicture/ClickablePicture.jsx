import './ClickablePicture.css'
import { useState } from "react"


const img = './src/assets/images/maxence.png'
const imgClicked = './src/assets/images/maxence-glasses.png'


const ClickablePicture = () => {

    const [faceGlasses, setFaceGlasses] = useState(false)

    const handleGlasses = () => {
        setFaceGlasses(!faceGlasses)
    }

    return (
        <div className="faceGlasses" onClick={handleGlasses}>
            <img src={!faceGlasses ? img : imgClicked} alt="Guy face" />
        </div>
    )
}

export default ClickablePicture