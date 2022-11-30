import { useState } from 'react'
import './ClickablePicture.css'


const ClickablePicture = (props) => {
    const { img, imgClicked } = props
    const [showGlass, setShowGlass] = useState(img)
    const handleShowGlass = () => {
        showGlass === img
            ? setShowGlass(imgClicked)
            : setShowGlass(img)

    }

    return (
        <img onClick={handleShowGlass} src={showGlass} alt='' />

    )
}

export default ClickablePicture