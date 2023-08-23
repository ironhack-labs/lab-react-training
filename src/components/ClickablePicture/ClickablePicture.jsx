import { useState } from "react"
import './ClickablePicture.css'
import person from '../../assets/maxence.png'
import glassesImage from '../../assets/maxence-glasses.png'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {

        setGlasses(!glasses)
    }

    return (
        <div className="glasses-container" onClick={handleGlasses}>
            <img className='glasses' src={glasses ? glassesImage : person} alt="" />
        </div>)

}

export default ClickablePicture