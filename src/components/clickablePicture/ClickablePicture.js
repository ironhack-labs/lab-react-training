import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {

    const [showGlasses, setShowGlasses] = useState(false)

    const toggleGlasses = () => setShowGlasses(!showGlasses)

    return (
        <div className='clickablePic'>

            <img onClick={toggleGlasses} src={showGlasses ? img : imgClicked} />

        </div>
    )
}

export default ClickablePicture